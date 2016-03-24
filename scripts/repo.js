(function(module) {
  var repos = {};

  repos.all = [];


  repos.requestRepos = function(callback) {
    $.get('github/users/preetsohal/repos' +
            '?per_page=100' +
            '&sort=updated')
.done(function(data,message,xhr){
  repos.all = data;

});

    // .done(callback);
  };
  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    console.log('began repos.with');
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
