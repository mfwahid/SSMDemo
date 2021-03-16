
const ssm = require('./aws-client');
const ssmsecrets = require('./secrets');

ssmsecrets.saveSecret('dbadmin', 'password1234');

ssmsecrets.getSecret('/dbadmin/passwordString').then((password) => {
    console.log(password);
});


