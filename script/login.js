// Used to log in to Google accounts.

const provider = new firebase.auth.GoogleAuthProvider()
// Use the language the user uses in their browser
firebase.auth.useDeviceLanguage()

// Authenticate using the google provider object
firebase.auth().signInWithPopup(provider).then(function(result){
  // Gives the google access token
  let token = result.credential.accessToken
  // user info
  let user = result.user
}).catch(function(error){
  // Handle errors
  let errorCode = error.errorCode
  let errorMessage = error.message
  // Email of the user account used
  let email = error.email
  // Firebase auth Credential used
  let credential = error.credential
})
