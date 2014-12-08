App.MatchesIndexRoute = Ember.Route.extend({
  redirect: function() {
    // TODO: how do i transition to the topmost conversation?
    this.transitionTo('/matches/59')
  }
});