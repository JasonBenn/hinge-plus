App.MatchesController = Ember.ArrayController.extend({
  sortProperties: ['first_name', 'last_name']
  // actions: {
    // checkLogin: function() {
    //   function statusChangeCallback(response) {
    //     console.log('statusChangeCallback');
    //     console.log(response);
    //     // The response object is returned with a status field that lets the
    //     // app know the current login status of the person.
    //     // Full docs on the response object can be found in the documentation
    //     // for FB.getLoginStatus().
    //     if (response.status === 'connected') {
    //       // Logged into your app and Facebook.
    //       // testAPI();
    //       App.Session = {
    //         myFBID: response.authResponse.userID,
    //         token: response.authResponse.accessToken
    //       }
    //       console.log('logged in!', response)
    //     } else if (response.status === 'not_authorized') {
    //       // The person is logged into Facebook, but not your app.
    //       console.log('Please log into this app.', response)
    //     } else {
    //       // The person is not logged into Facebook, so we're not sure if
    //       // they are logged into this app or not.
    //       console.log('Please log into Facebook.', response)
    //     }
    //   }

    //   function checkLoginState() {
    //     FB.getLoginStatus(statusChangeCallback);
    //   }

    //   checkLoginState();
    // },

    // login: function() {
    //   FB.login(function(response) {
    //     if (response.authResponse) {
    //       App.Session = {
    //         myFBID: response.authResponse.userID,
    //         token: response.authResponse.accessToken
    //       }
    //       console.log('Logged in!')
    //     } else {
    //       App.Session = null;
    //       console.log('User cancelled login or did not fully authorize.');
    //     }
    //   });
    // },

    // getToRate: function() {
    //   getPotentialMatches().done(function(data) {console.log(data)})
    // }
  // }
});