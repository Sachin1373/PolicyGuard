const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const dotenv = require('dotenv');
dotenv.config();

const key = crypto.scryptSync(process.env.ENCRYPTION_SECRET, 'salt', 32);

function encrypt(text) {
    try {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return iv.toString('hex') + ':' + encrypted;
    } catch (error) {
        throw new Error('Encryption failed');
    }
  }
  
  function decrypt(encryptedText) {
    try {
    const parts = encryptedText.split(':');
    const iv = Buffer.from(parts[0], 'hex');
    const encrypted = parts[1];
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
    } catch (error) {
        throw new Error('Decryption failed');
    }
  }
  
  module.exports = { encrypt, decrypt };
  