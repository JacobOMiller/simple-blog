'use strict';

var app = angular.module('MyApp',['ui.router']);

app.config([
    '$stateProvider',
    function ($stateProvider){
        $stateProvider
        .state('home',{
            url:'/home',
            template:'<h2>Home</h2>'
        })
        .state('about',{
            url:'/about',
            template:'<h2>About</h2>'
        })
        .state('contact',{
            url:'/contact',
            template:'<h2>Contact</h2>'
        })
        .state('posts',{
            url:'/posts',
            templateUrl:'/templates/posts/list.html',
            controller:'Posts.postController'
        })
        .state('posts-create',{
            url:'/posts/create',
            templateUrl:'/templates/posts/edit.html',
            controller:'Posts.postController'
        })
        .state('posts-view',{
            url:'/posts/:id',
            templateUrl:'/templates/posts/postView.html',
            controller:'Posts.postController'
        });


    }
])
