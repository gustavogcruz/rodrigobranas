module.exports = {
  apps : [{

    "name": "theo",
    "script": "main.js",
    "watch": true,
    instances: 2,
    env: {
      PORT: 3000
    }
  }]
};
