const Integration = require('../models/Integration');
const GitHubIntegrationConfig = require('../models/GitHubIntegrationConfig');
const { encrypt, decrypt } = require('../utils/encryption');
const axios = require('axios');



// Controller to handle GitHub integration setup
const createGitHubIntegration = async (req, res) => {
    try {
        const userId = req.user.id;
        const { appname, personalAccessToken, organizationScope, permissions } = req.body;

    if (!appname || !personalAccessToken) {
      return res.status(400).json({ message: 'Name and Personal Access Token are required' });
    }

    // Optional: validate the token by calling GitHub API
    try {
      const ghResponse = await axios.get('https://api.github.com/user', {
        headers: { Authorization: `token ${personalAccessToken}` },
      });
      if (ghResponse.status !== 200) {
        return res.status(400).json({ message: 'Invalid GitHub token' });
      }
    } catch (error) {
      return res.status(400).json({ message: 'Invalid GitHub token or API error' });
    }

    // Create Integration record
    const integration = new Integration({
      userId,
      appname,
      type: 'github',
    });

    await integration.save();
     const encryptedToken = encrypt(personalAccessToken);

     const ghConfig = new GitHubIntegrationConfig({
       integrationId: integration._id,
       personalAccessToken: encryptedToken,
       organizationScope,
       permissions,
     });
 
     await ghConfig.save();
 
     res.status(201).json({ message: 'GitHub Integration created successfully', integrationId: integration._id });

    } catch (error) {
        console.error('Error creating GitHub integration:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

module.exports = {  createGitHubIntegration };