(function(){
    angular.module('myRepos')
      .controller('myReposController', ['$http', function($http) {
        var repoRoute = 'https://api.github.com/users/samanthaprince/repos';
        this.repos = [];

        this.getRepos = function() {
          $http.get(repoRoute).then((res) => {
            this.repos = res.data;
          }, (err) => {
            console.log(err);
          });
        };
      }]);
})();
