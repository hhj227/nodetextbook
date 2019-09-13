const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-cbc','key');
let result = cipher.update('fool','utf8','base64');
result += cipher.final('base64');
console.log('암호',result);
const decipher = crypto.createDecipher('aes-256-cbc','key');
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('평문',result2);

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log("salt = ", salt);
    crypto.pbkdf2('password', salt, 10135,64, 'sha512', (err,key) => {
        console.log('password = ', key.toString('base64'));
    });
});