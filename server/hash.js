const bcrypt = require('bcrypt');


const salt = bcrypt.genSalt(10, (err, salt) => {
    if (err) return false;
    bcrypt.hash
});
// const hash = bcrypt.hash('', salt);