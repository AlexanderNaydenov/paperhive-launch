'use strict';

module.exports = function(app) {

  app.controller('DiscussionListCtrl', [
    '$scope', 'metaService',
    function($scope, metaService) {
      // set meta data
      $scope.$watch('article', function(article) {
        if (article) {
          metaService.set({
            title: 'Discussions · ' + article.title + ' · PaperHive',
            author: article.authors.join(', '),
            description:
              article.abstract.replace(/(\r\n|\n|\r)/gm, ' ').substring(0, 150)
          });
        }
      });
    }
  ]);
};
