'use strict';

app.contrller('PostViewCtrl', function ($scope, $routeParams, Post) {
  $scope.post = Post.find($routeParams.postId);
});
