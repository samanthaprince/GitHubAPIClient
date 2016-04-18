(function() {

  const angular = require('angular');

  require(__dirname + '/profile/profile_module');
  require(__dirname + '/profile/profile.js');
  require(__dirname + '/myRepos/myRepos_module');
  require(__dirname + '/myRepos/myRepos');

  angular.module('app', ['profile', 'myRepos']);
})();
