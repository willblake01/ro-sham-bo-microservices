const path = require('path');

module.exports = {
  apps: ['web', 'games', 'players'].map(name => ({
    name,
    cwd: path.resolve(__dirname, `./servers/${name}`),
    script: './index.js',
    watch: ['.', '../shared', '../../node_modules'],
    instance_var: 'INSTANCE_ID',
    env: {
      NODE_ENV: 'development',
      NODE_PATH: path.resolve(__dirname, './node_modules'),
    },
    env_production: {
      NODE_ENV: 'production'
    }
  })),
  deploy: {
    production: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:willblake01/ro-sham-bo-microservices.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload pm2.config.js --env production'
    }
  }
};
