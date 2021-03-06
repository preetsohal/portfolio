(function(module) {
  var repoView = {};

  // DONE: Private methods declared here live only within the scope of the wrapping IIFE.
  var ui = function() {
    var $secPortfolio = $('#sec-portfolio'); // Best practice: Cache the DOM query if it's used more than once.

    $secPortfolio.find('ul').empty();
    $secPortfolio.show().siblings().hide();
  };


  // DONE: Remember that new Handlebars template? Let's compile it!
  // Save the result in this `render` variable.
  var render = function(repo) {
     var template = Handlebars.compile($('#repo-template').html());
     return template(repo);
  };
  // DONE: If all the data is loaded, we can prep the UI and render the repos.
  repoView.index = function() {
    ui();

    // The jQuery `append` method lets us append an entire array of HTML elements at once,
    // So we can use a little FP to transform our data-set into DOM nodes:
    console.log('began repoView.index');
    $('#sec-portfolio ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
