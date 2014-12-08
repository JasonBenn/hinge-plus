App.Match = DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  last_seen: DS.attr('date'),
  about_me: DS.attr('string'),
  work: DS.attr('string'),
  college: DS.attr('string'),
  height: DS.attr('string'),
  tags: DS.attr('string'),
  mutual_friends: DS.attr('number'),
  fullName: function() {
    return this.get('first_name') + ' ' + this.get('last_name');
  }.property('first_name', 'last_name')
})