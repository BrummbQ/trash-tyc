// See http://brunch.io for documentation.
exports.modules = {
	nameCleaner: path => path.replace(/^view\//, '')
} 

exports.paths = {
	watched: ['view']
}

exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!view)/,
      'app.js': /^view/
    }
  },
  stylesheets: {
    joinTo: {
      'app.css': /^view/
    }
  }
};

exports.plugins = {
  babel: {presets: ['env', 'react']},
  sass: {
    mode: 'native',
    includePaths: ['node_modules/']
  }
};
