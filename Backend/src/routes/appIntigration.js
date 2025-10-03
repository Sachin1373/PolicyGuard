const express = require('express');
const { createGitHubIntegration } = require('../controllers/apps.controller');
const verify =  require('../middlewares/Verify');

const router = express.Router();

router.post('/github', verify, createGitHubIntegration);


module.exports = router;