App.Router.reopen({
  location: 'auto',
  rootURL: '/'
});

App.Router.map(function() {
  this.resource('matches', { path: '/' }, function() {
    this.resource('match', { path: '/matches/:id' });
  });
});
