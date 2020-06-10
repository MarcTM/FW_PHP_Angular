marcangular.factory("services", ['$http','$q', function ($http, $q) {
    var serviceBase = '/FW_PHP_Angular_Marc/backend/index.php?module=';
    var obj = {};


       ///////////
         // GET
         //////////
        obj.get = function (module, functi) {
            var defered=$q.defer();
            var promise=defered.promise;
            $http({
                  method: 'GET',
                  url: serviceBase + module + '&function=' + functi
              }).success(function(data, status, headers, config) {
                 defered.resolve(data);
              }).error(function(data, status, headers, config) {
                 defered.reject(data);
              });
            return promise;
        };



        ///////////
         // GET
         //////////
        obj.get = function (module, functi, dada) {
            var defered=$q.defer();
            var promise=defered.promise;
            $http({
                  method: 'GET',
                  url: serviceBase + module + '&function=' + functi + '&param=' + dada
              }).success(function(data, status, headers, config) {
                 console.log(data);
                 defered.resolve(data);
              }).error(function(data, status, headers, config) {
                 defered.reject(data);
              });
            return promise;
        };


        ///////////
         // GET
         //////////
        obj.get = function (module, functi, dada, dada2) {
            var defered=$q.defer();
            var promise=defered.promise;
            $http({
                  method: 'GET',
                  url: serviceBase + module + '&function=' + functi + '&param=' + dada + '&param2=' + dada2
              }).success(function(data, status, headers, config) {
                 //console.log(data);
                 defered.resolve(data);
              }).error(function(data, status, headers, config) {
                 defered.reject(data);
              });
            return promise;
        };



         ///////////
         // POST
         //////////
        obj.post = function (module, functi, dada) {
          var defered=$q.defer();
          var promise=defered.promise;
          $http({
                method: 'POST',
                url: serviceBase + module + '&function=' + functi,
                data: dada
            }).success(function(data, status, headers, config) {
              //debugger;
               defered.resolve(data);
            }).error(function(data, status, headers, config) {
               defered.reject(data);
            });
          return promise;
        };


        ///////////
         // PUT
         //////////
        obj.put = function (module, functi, dada) {
          var defered=$q.defer();
          var promise=defered.promise;
          $http({
                method: 'PUT',
                url: serviceBase + module + '&function=' + functi,
                data: dada
            }).success(function(data, status, headers, config) {
      	       defered.resolve(data);
            }).error(function(data, status, headers, config) {
               defered.reject(data);
            });
          return promise;
        };


        ///////////
         // DELETE
         //////////
        obj.delete = function (module, functi, dada) {
            var defered=$q.defer();
            var promise=defered.promise;
            $http({
                  method: 'DELETE',
                  url: serviceBase + module + '&function=' + functi + '&param=' + dada
              }).success(function(data, status, headers, config) {
                 //console.log(data);
                 defered.resolve(data);
              }).error(function(data, status, headers, config) {
                 defered.reject(data);
              });
            return promise;
        };
        
    return obj;
}]);
