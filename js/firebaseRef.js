var ref = new Firebase("https://chatty-rooms.firebaseio.com/");
var messagesRef = ref.child('messages');
var usersRef = ref.child('users');
var currentUser = null;

    $('#login').on("click", function () {
        authenticate();
    });

var authenticate = function() {
    usersRef.authWithOAuthPopup('twitter', function (error, user) {
        if (error) {
            console.log(error);
        } else if (user) {
            console.log(user);
            usersRef.child(user.uid).set({username: user.twitter.username, pic: user.twitter.cachedUserProfile.profile_image_url_https});

        }
    });
};
    //Save user's auth state
    usersRef.onAuth(function (user) {
        currentUser = user;
    });

usersRef.on('child_added', function (snapshot) {
  var user = snapshot.val();
  $("<div id='user'><img src=" + user.pic + "/><span id='username'>@" + user.username + "</span></div>").appendTo($('#here'));
});

$('#tweet-submit').on('click', function () {
  if (currentUser !== null) {
    var message = $('#msgInput').val();
    //Send the message to Firebase
    messagesRef.push({user: currentUser.uid, username: currentUser.twitter.username, message: message, published: new Date().getTime()});
    $('#msgInput').val('');
  } else {
    alert('You must login with Twitter to post!');
  }
});

messagesRef.orderByChild("published").on('child_added', function (snapshot) {
  var messages = $("#msg-box");
  var message = snapshot.val();
  var username = message.username;
  var tweet = message.message;

  var html = '<div class="msg-text">' +
                '<strong>' + username + '</strong>' +
                '<br>' + tweet + '<br><br>' +
             '</div>';


  messages.prepend(html);

});
