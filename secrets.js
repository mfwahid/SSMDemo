const ssm = require('./aws-client');

const saveSecret = async (username, password) => {
  const secretName = `/${username}/passwordString`;
  console.log(`Saving secret to ${secretName}`); 

  const config = { 
    Name: secretName, 
    Value: password, 
    Type: 'SecureString', 
    Overwrite: true
  }; 
  
  ssm.putParameter(config, (err, data) => { 
    if (err) { 
      console.log(err, err.stack); 
    } 
  });
};

const getSecret = async (secretName) => {
  console.log(`Getting secret for ${secretName}`);
  const params = {
    Name: secretName, 
    WithDecryption: true
  };

  const result = await ssm.getParameter(params).promise();
  return result.Parameter.Value;
};

module.exports = {saveSecret, getSecret};
//module.exports.saveSecret = saveSecret;