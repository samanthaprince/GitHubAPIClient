(function(){
  angular.module('profile')
    .controller('ProfileController', ['$http', function($http){
      var route = 'https://api.github.com/users/samanthaprince';
      this.profile = [];

      this.getProfile = function() {
        $http.get(route).then((res) => {
          this.profile = res.data;
        }, (err) => {
          console.log(err);
        });
      };
    }]);
})();
