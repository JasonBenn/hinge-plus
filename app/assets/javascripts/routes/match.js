App.MatchRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('match', params.id);
  }
});