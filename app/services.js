
app.factory('authInterceptor', function($q, $window, $location) {
    return {
        request: function(config) {

            if ($window.sessionStorage._auth && config.url.substring(0, 4) == 'http') {
                config.headers['access-token'] = $window.sessionStorage._auth;
            }
            return config;
        },
        responseError: function(rejection) {

            if (rejection.status === 401) {
                $window.setTimeout(function() {
                    $window.location = '/#/login';
                }, 1000);
            }
            return $q.reject(rejection);
        }
    };
});


app.value('app-version', '0.0.3');

// Need set url REST Api in controller!
app.service('rest', function($http, $location, $routeParams) {

    return {
        baseUrl: 'api/v1/',
        path: undefined,
        get: function() {
            return $http.get(this.baseUrl + this.path);
        },
        model: function() {
            return $http.get(this.baseUrl + this.path + "/" + $routeParams.id);
        },
        post: function(model) {
            return $http.post(this.baseUrl + this.path, model);
        },
        put: function(model) {
            return $http.put(this.baseUrl + this.path + "/" + $routeParams.id, model);
        },
        delete: function() {
            return $http.delete(this.baseUrl + this.path);
        }
    };

});


app.factory('fileReader', function($q, $log) {

    var onLoad = function(reader, deferred, scope) {
        return function() {
            scope.$apply(function() {
                deferred.resolve(reader.result);
            });
        };
    };

    var onError = function(reader, deferred, scope) {
        return function() {
            scope.$apply(function() {
                deferred.reject(reader.result);
            });
        };
    };

    var onProgress = function(reader, scope) {
        return function(event) {
            scope.$broadcast("fileProgress",
                    {
                        total: event.total,
                        loaded: event.loaded
                    });
        };
    };

    var getReader = function(deferred, scope) {
        var reader = new FileReader();
        reader.onload = onLoad(reader, deferred, scope);
        reader.onerror = onError(reader, deferred, scope);
        reader.onprogress = onProgress(reader, scope);
        return reader;
    };

    var readAsDataURL = function(file, scope) {
        var deferred = $q.defer();

        var reader = getReader(deferred, scope);
        reader.readAsDataURL(file);

        return deferred.promise;
    };

    return {
        readAsDataUrl: readAsDataURL
    };


});