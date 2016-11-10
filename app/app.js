var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ngTagsInput', 'mgcrea.ngStrap', 'ui.calendar', 'ui.bootstrap', 'datatables', 'ngLoadingSpinner']);

app.config(function($locationProvider, $routeProvider, $httpProvider, $compileProvider) {
    
    var modulesPath = 'html/';

    $routeProvider
            .when('/', {
                templateUrl: modulesPath + 'login.html',
                controller: 'loginController'
            })
            .when('/dashboard', {
                templateUrl: modulesPath + 'dashboard.html',
                controller: 'dashboardController',
                activetab: 'dashboard'
            })
            .when('/resetpassword', {
                templateUrl: modulesPath + 'resetPassword.html',
                controller: 'loginController',
                activetab: 'dashboard'
            })
            .when('/user', {
                templateUrl: modulesPath + 'user.html',
                controller: 'userController',
                activetab: 'dashboard'
            })
            .when('/user-type', {
                templateUrl: modulesPath + 'user-type.html',
                controller: 'usertypeController',
                activetab: 'dashboard'
            })

            //------------user profiles --------------------//
            .when('/user-profile', {
                templateUrl: modulesPath + 'communication.html',
                controller: 'communicationController',
                activetab: 'dashboard'
            })
            .when('/user-profile/:id', {
                templateUrl: modulesPath + 'communication.html',
                controller: 'communicationController',
                activetab: 'dashboard'
            })
            .when('/calender', {
                templateUrl: modulesPath + 'calender.html',
                controller: 'CalendarCtrl',
                activetab: 'dashboard'
            })
            .when('/properties', {
                templateUrl: modulesPath + 'property.html',
                controller: 'propController',
                activetab: 'dashboard'
            })
//                .when('/properties/:id', {
//                    templateUrl: modulesPath + 'property.html',
//                    controller: 'propController',
//                    activetab: 'dashboard'
//                })
            .when('/payment', {
                templateUrl: modulesPath + 'payment.html',
                controller: 'paymentController',
                activetab: 'dashboard'
            })
//                .when('/payment/:id', {
//                    templateUrl: modulesPath + 'payment.html',
//                    controller: 'paymentController',
//                    activetab: 'dashboard'
//                })
            .when('/user-task', {
                templateUrl: modulesPath + 'userTask.html',
                controller: 'usertaskController',
                activetab: 'dashboard'
            })
//                .when('/user-task/:id', {
//                    templateUrl: modulesPath + 'userTask.html',
//                    controller: 'usertaskController',
//                    activetab: 'dashboard'
//                })
            //------------------- client profile ------------------------//
            .when('/client', {
                templateUrl: modulesPath + 'client.html',
                controller: 'clientController',
                activetab: 'client'
            })
            .when('/client-profile', {
                templateUrl: modulesPath + 'client-profile.html',
                controller: 'basicinfoController',
                activetab: 'client'
            })
            .when('/edit-client/:id', {
                templateUrl: modulesPath + 'client-profile.html',
                controller: 'basicinfoController',
                activetab: 'client'
            })
            .when('/contact-person', {
                templateUrl: modulesPath + 'contact-person.html',
                controller: 'contactController',
                activetab: 'client'
            })
            .when('/price-list', {
                templateUrl: modulesPath + 'price-list.html',
                controller: 'pricelistController',
                activetab: 'client'
            })
            //--------------admin masters ----------------//
            .when('/tasks', {
                templateUrl: modulesPath + 'task-type.html',
                controller: 'tasktypeController',
                activetab: 'client'
            })
            .when('/userstatus', {
                templateUrl: modulesPath + 'user-status.html',
                controller: 'userstatusController',
                activetab: 'userstatus'
            })
            .when('/currency', {
                templateUrl: modulesPath + 'currency.html',
                controller: 'currencyController',
                activetab: 'currency'
            })
            .when('/property', {
                templateUrl: modulesPath + 'properties.html',
                controller: 'PropertyController',
                activetab: 'property'
            })

            .when('/404', {
                templateUrl: modulesPath + '404.html'
            })

            .otherwise({redirectTo: '/404'});
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|skype):/);
    //$locationProvider.html5Mode(true).hashPrefix('!');
    $httpProvider.interceptors.push('authInterceptor');
});
