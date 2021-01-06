module.exports = {
  mode: 'scp',
  entry: './src',
  output: './dist',
  deploy: {
    projectName: '',
    rootPath: '',
    connectOptions: {
      host: '',
      user: ''
    }
  }
}