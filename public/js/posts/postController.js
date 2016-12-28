// grab the app module
var app = angular.module('MyApp');

// create the controller

app.controller('Posts.postController',[
    '$scope', '$http', '$state',

    function ($scope, $http, $state){
        console.log('post controller working');



        // create a post object to store post data

        $scope.post = {};

        $scope.create = function () {

            // make sure we have a valid form
            if($scope.editPost.$valid == true){
                console.log(' create new post object on db' , $scope.post);
                // make a request to the server to save
                // the new post object data
                $http({
                    //Specify the http method
                    method: 'POST',
                    //provide the url of the server where we angular-ui-router
                    // are send ing the data
                    url:'/posts',
                    //provide the data we need to send
                    data: $scope.post


                }).success (function (response){
                    console.log('object was saved to the db')
                    // specify the route that we go to after the post has been succesfully saved
                    $state.go ('posts');
                })
            }
            else {
                //notify user something is wrong with the form
                console.error('something is wrong with the form');
            }

        }
    }
]);
