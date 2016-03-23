(function(module) {
  var portfolioController = {};

  portfolioController.index = function() {
    $('#sec-portfolio').show().siblings().hide();

    // TODO: Call a function to load (AKA 'request') our repo data.
    // Pass in a view function as a callback, so our repos will render after the data is loaded.
    repos.requestRepos(repoView.index);
  };

  module.portfolioController = portfolioController;
})(window);
