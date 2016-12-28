// grab the app module
var app = angular.module('MyApp');

// create the controller

app.controller('Posts.postController',[
    '$scope', '$http', '$state',

    function ($scope, $http, $state){
        console.log('post controller working');



        // create a post object to store post data

        $scope.post = {};


        //function for creating posts in the db

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
        //function for reading all the posts from the db
        $scope.readAll = function (){
            console.log('reading in all posts from db');
            // make a call to the server to read all the posts available
            $http({
                method:'Get',
                url:'/posts?_sort=id&_order=DESC'


            })
            .success(function(response){
                console.log('the object s:', response);
                $scope.postList = response;
            })

        }
        // function for reading a  post by id
        $scope.readById = function (id){
            //make a call to the server to find a post object by id
            $http({
                //provide the http method
                method: 'Get',
                url:'/posts/' + id
            })
            .success( function(response){
                console.log('this s the post object from server:' , response);
                $scope.post = response;
            })
        }

        //function for setting up the controller once it is created
        function setup (){
            //check which page state we are currently on
            var pageState = $state.current.name;
            if (pageState == 'posts')
            {
                // when in the post state we need to  load in the post objects from the db
                $scope.readAll ();
            }
            else if (pageState == 'posts-view'){
                //when we are in the 'view' state we need
                // to read in the post data by specific id.
                var postId = $state.params.id;
                $scope.readById (postId);
            }
        }

        // run the setup and config for the controller
        setup();

    }
]);
