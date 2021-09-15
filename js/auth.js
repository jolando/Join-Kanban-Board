auth.onAuthStatusChanged(user => {
    if (user) {
        console.log('user logged in: ', user);
    } else {
        console.log('user logged out', user)
    }
});
