exports.config = {
  namespace: 'my-component',
  generateDistribution: true,
  generateWWW: false
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};