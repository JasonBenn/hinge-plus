App.MatchesController = Ember.ArrayController.extend({
  sortProperties: ['first_name', 'last_name'],
  actions: {
    login: function() {
      console.log('logging in!')

      // https://www.facebook.com/v2.0/dialog/oauth?response_type=token&display=popup&api_key=287435711376482&redirect_uri=fbconnect%3A%2F%2Fsuccess&scope=user_about_me%2Cuser_activities%2Cuser_education_history%2Cuser_location%2Cuser_photos%2Cuser_relationship_details%2Cuser_status

      $.ajax({
        url: 'https://www.facebook.com/v2.0/dialog/oauth/confirm',
        type: 'POST',
        data: {
        app_id: '287435711376482',
        fb_dtsg: $('input[name="fb_dtsg"]').val(), // AQF5yZVV1HWa
        ttstamp: '2658170904850115701205011500',
        redirect_uri: 'fbconnect://success',
        return_format: 'access_token',
        from_post: 1,
        display: 'popup',
        gdp_version: 4,
        sheet_name: 'initial',
        __CONFIRM__: 1
        }
      }).done(function(html) {
        var found = html.match(/access_token=([\w_]+)&/i);
        debugger
        // chrome.runtime.sendMessage({type: 'facebookAuth', token: found ? found[1] : null});
      }).fail(function(jqXHR, textStatus) {
        // chrome.runtime.sendMessage({type: 'facebookAuth', token: null});
        debugger
      });
    }
  }

  // actions: {
  //   checkLogin: function() {
  //     function statusChangeCallback(response) {
  //       console.log('statusChangeCallback');
  //       console.log(response);
  //       // The response object is returned with a status field that lets the
  //       // app know the current login status of the person.
  //       // Full docs on the response object can be found in the documentation
  //       // for FB.getLoginStatus().
  //       if (response.status === 'connected') {
  //         // Logged into your app and Facebook.
  //         // testAPI();
  //         App.Session = {
  //           myFBID: response.authResponse.userID,
  //           token: response.authResponse.accessToken
  //         }
  //         console.log('logged in!', response)
  //       } else if (response.status === 'not_authorized') {
  //         // The person is logged into Facebook, but not your app.
  //         console.log('Please log into this app.', response)
  //       } else {
  //         // The person is not logged into Facebook, so we're not sure if
  //         // they are logged into this app or not.
  //         console.log('Please log into Facebook.', response)
  //       }
  //     }

  //     function checkLoginState() {
  //       FB.getLoginStatus(statusChangeCallback);
  //     }

  //     checkLoginState();
  //   },

  //   login: function() {
  //     FB.login(function(response) {
  //       if (response.authResponse) {
  //         App.Session = {
  //           myFBID: response.authResponse.userID,
  //           token: response.authResponse.accessToken
  //         }
  //         console.log('Logged in!')
  //       } else {
  //         App.Session = null;
  //         console.log('User cancelled login or did not fully authorize.');
  //       }
  //     });
  //   },

  //   getToRate: function() {
  //     getPotentialMatches().done(function(data) {console.log(data)})
  //   }
  // }
});
