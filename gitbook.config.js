module.exports = {
  mode: 'scp',
  entry: './src',
  output: './dist',
  deploy: {
    projectName: 'packpub-cli',
    rootPath: '/root/webroot',
    connectOptions: {
      host: '47.108.95.110',
      user: 'root'
    }
  }
}