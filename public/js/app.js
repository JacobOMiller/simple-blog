'use strict';

var app = angular.module('MyApp',['ui.router']);

app.config([
    '$stateProvider',
    function ($stateProvider){
        $stateProvider
        
        .state('about',{
            url:'/about',
            templateUrl:'templates/about.html'
        })
        .state('contact',{
            url:'/contact',
            templateUrl:'templates/contact.html'
        })

    }
])
