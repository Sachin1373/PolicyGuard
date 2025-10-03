// models/GitHubIntegrationConfig.js
const mongoose = require('mongoose');

const githubIntegrationConfigSchema = new mongoose.Schema({
  integrationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Integration', required: true },
  personalAccessToken: { type: String, required: true },  // encrypted Personal Access Token
  organizationScope: { type: String, required: false },   // GitHub org or user scope
  permissions: {
    repositoryRead: { type: Boolean, default: false },
    repositoryWrite: { type: Boolean, default: false },
    adminOrg: { type: Boolean, default: false },
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('GitHubIntegrationConfig', githubIntegrationConfigSchema);
