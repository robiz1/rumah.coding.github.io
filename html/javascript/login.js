// app.js
document.getElementById('githubSignUp').addEventListener('click', function () {
    // Redirect user to GitHub for OAuth authorization
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=3494448c9f9461c3dc83&redirect_uri=f2284d7bf2101e60bbb19528881f3e212803d718&scope=user';
});
