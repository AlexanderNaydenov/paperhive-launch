// DEBUG
var users = [
  {
  _id: "08ea4",
  orcidId: "dasdasd0",
  userName: "hondi",
  displayName: "Hondanz",
  gravatarMd5: ""
},
{
  _id: "152ea4",
  orcidId: "dasdasd1",
  userName:  "hoppenstedt",
  displayName: "Opa Hoppenstedt",
  gravatarMd5: ""
},
{
  _id: "ea5411",
  orcidId: "dasdasd2",
  userName: "jimmy",
  displayName: "Jimmy",
  email: "jimmy@best.com",
  gravatarMd5: ""
}
];

var accounts = [
  {
  _id: "ea5411da",
  accountName: "arxiv",
  displayName: "arXiv.org"
}
];

var annotations = [
  {
  _id: "1242340",
  author: users[0],
  body: "Simple equations, like $$x^y$$ or $$x_n = \\sqrt{a + b}$$ can be typeset Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ```python def mysin(x): y = sin(x) return y ```",
  time: new Date(),
  editTime: undefined,
  labels: ["comment", "link"],
  permissions: {
    read: true,
    edit: true,
    delete: true
  }
},
{
  _id: "1242341",
  author: users[1],
  body: "Bringt doch alles nichts",
  time: new Date(),
  editTime: undefined,
  labels: ["reply"],
  permissions: {
    read: true,
    edit: true,
    delete: true
  }
},
{
  _id: "1242342",
  author: users[2],
  body: "I like turtles",
  time: new Date(),
  editTime: undefined,
  labels: ["reply"],
  permissions: {
    read: true,
    edit: true,
    delete: true
  }
}
];

var discussion = {
  _id: "857431",
  title: "Title of the discussion",
  number: 12,
  originalAnnotation: annotations[0],
  replies: [
    annotations[1],
    annotations[2]
  ]
};

var article =
  {
  _id: "0af5e13",
  owner: accounts[0],
  url: "http://arxiv.org/pdf/1208.0264v3.pdf",
  title: "Preconditioned Recycling Krylov Subspace Methods for Self-Adjoint Problems",
  authors: [users[2], users[1]],
  discussions: [discussion]
};
// END DEBUG

module.exports = function (app) {
  app.controller('ArticleCtrl', [
    '$scope',
    function($scope) {
      $scope.article = article;
    }]);
};
