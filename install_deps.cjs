const { execSync } = require('child_process');
const fs = require('fs');

const logFile = 'e:/Karvo/install.log';
function log(msg) {
  fs.appendFileSync(logFile, msg + '\n');
  console.log(msg);
}

fs.writeFileSync(logFile, 'Starting install...\n');

try {
  log('Running npm install...');
  const out = execSync(
    'npm.cmd install framer-motion @radix-ui/react-tabs --legacy-peer-deps --cache=e:/Karvo/.npm-cache --no-audit --no-fund',
    {
      cwd: 'e:/Karvo',
      encoding: 'utf-8',
      env: { ...process.env, npm_config_cache: 'e:/Karvo/.npm-cache' },
      timeout: 120000,
    }
  );
  log('Output: ' + out);
  log('SUCCESS');
} catch (err) {
  log('ERROR: ' + err.message);
  if (err.stdout) log('STDOUT: ' + err.stdout);
  if (err.stderr) log('STDERR: ' + err.stderr);
}
