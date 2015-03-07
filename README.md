Firebase Chat Room using Twitter OAuth 2.0
===========

This is a simple example of quickly building a live chat room with user authentication through the Twitter API & Firebase
To create your own version of this application:

1. Register at Firebase.com for a free developer account
2. Create a new application & give it a name
    ex. twitter-app --> https://twitter-app.firebaseio.com

3. Inside the firebaseRef.js file:

    replace the url inside
    var ref = new Firebase("https://chatty-rooms.firebaseio.com/");

    to the firebase url for the registered app
    var ref = new Firebase({{ YOUR FIREBASEIO URL HERE }});

 4. Google Twitter Developer API & signup for a twitter account if you don't have one already
 5. Go into the "manage apps" section & register a new application

 6. Register a new application & include the callback url for either localhost, 127.0.0.1 or your live url (ex: hostedsite.firebaseapp.com/)

 7. Copy the API Key & Secret Key from the newly registered app & head back to firebase.com

 8. Under the security settings of your firebase app, navigate to the twitter authentication tab & click the option to user twitter authentication in your application
 Past the API Key & Secret key to tell firebase that you have an application registered with the Twitter Developer API.

 9. Use your app for whatever you want!! Happy Firebasein'
