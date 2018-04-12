exports.config = {
  namespace: 'mycomponent',
  generateDistribution: true,
  generateWWW: false
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
