var log = console.log.bind(console)

PUBNUB_PUBLISH_KEY = 'pub-c-fe993ca2-f6cf-4778-856d-853307cd03a4'
PUBNUB_SUBSCRIBE_KEY = 'sub-c-796b7e9e-d42c-11e2-8c6f-02ee2ddab7fe'
function getChatHistory(channelID) {
  var pubnub = PUBNUB.init({
    publish_key: PUBNUB_PUBLISH_KEY,
    subscribe_key: PUBNUB_SUBSCRIBE_KEY
  });

  pubnub.history({
    channel: channelID,
    count: 100,
    callback: log
  });
}
// getChatHistory('OTJkZjE4MDEyZTg3YWI1YjhiNmM5NzNhZWExZmZhY2I4NjBlYTUyODA2OTY0Mjg3YjkwMDVmYmU3YmU4ODFkMw==')

// function getPotentialMatches() {
//   return $.get('/api/v1/to-rate', { myFBID: App.Session.myFBID, token: App.Session.token });
// }
// // getPotentialMatches().done(log)


// // like and pass return a new array of results - weird. use it to update the match view as you're going through it?
// function like(otherHingeID, otherFBID) {
//   return $.get('/api/v1/like', { myFBID: App.Session.myFBID, otherHingeID: otherHingeID, otherFBID: otherFBID, token: App.Session.token });
// }
// // like('548995e3ee952a05d4ecc4f8', 774307578).done(log)

// function pass(otherHingeID, otherFBID) {
//   return $.get('/api/v1/like', { myFBID: App.Session.myFBID, otherHingeID: otherHingeID, otherFBID: otherFBID, token: App.Session.token });
// }
