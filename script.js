const { execSync } = require('child_process');

console.log('Running custom build script...');

// Install libnss3 or perform any other necessary setup
try {
  execSync('apt-get update');
  execSync('apt-get install -y libnss3');
} catch (error) {
  console.error('Failed to install libnss3:', error.message);
  process.exit(1);
}

console.log('Custom build script completed successfully.');
