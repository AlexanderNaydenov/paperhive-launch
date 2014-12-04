module.exports = function (app) {
  app.controller('DiscussionCtrl', [
    '$scope', 'AuthService', '$routeParams',
    function($scope, AuthService, $routeParams) {

      // retrieve the discussion
      var _ = require('underscore');
      $scope.discussion = _.findWhere($scope.article.discussions,
                                      {"number": parseInt($routeParams.num)}
                                     );
      if ($scope.discussion === undefined) {
        throw PhError("Discussion not found.");
      }

      $scope.subscribers = [
      ];
      if('user' in AuthService) {
        $scope.isSubscribed = $scope.subscribers.indexOf(AuthService.user._id) > -1;
      } else {
        $scope.isSubscribed = false;
      }
      $scope.toggleSubscribe = function() {
        var k = $scope.subscribers.indexOf(AuthService.user._id);
        if (k > -1) {
          // remove from to subscribers list
          $scope.subscribers.splice(k, 1);
          $scope.isSubscribed = false;
        } else {
          // add to subscribers list
          $scope.subscribers.push(AuthService.user._id);
          $scope.isSubscribed = true;
        }
      };

      $scope.addReply = function() {
        if (!$scope.auth.user) {
            throw PhError("Not logged in?");
        }
        // create the annotation
        reply = {
          _id: Math.random().toString(36).slice(2),
          author: $scope.auth.user,
          body: $scope.annotationBody,
          time: new Date(),
          labels: ["reply"]
        };
        $scope.discussion.replies.push(reply);
        // clear body
        $scope.annotationBody = null;
        return;
      };

      $scope.deleteReply = function(deleteId) {
        // TODO remove reply from database, add the following code into the
        // success handler
        var k = -1;
        for (var i = 0; i < $scope.discussion.replies.length; i++) {
          if ($scope.discussion.replies[i]._id === deleteId) {
            k = i;
            break;
          }
        }
        // TODO use this instead of the 
        //_ = require('underscore');
        //var k = _.indexOf(_.pluck($scope.discussion.replies, '_id'), deleteId);
        if (k < 0) {
          throw PhError("Reply not found.");
        }
        // remove if from the list
        $scope.discussion.replies.splice(k, 1);
      };

    }]);
};