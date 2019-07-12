const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'deploy',
    repo: 'https://github.com/SmokinClove/smokinclove.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)