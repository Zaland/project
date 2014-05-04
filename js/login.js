var url = 'https://goinstant.net/e66bb6600472/Project';
var opts = { room: 'lobby' };
goinstant.connect(url, opts, function(err, conn, room) {
    if (err) {
        throw err;
    }

    if (conn.isGuest()) {
        // prompt user to log in with a provider:
        displaySignOnLink(conn);
    } else {
        // fully connected, start using goinstant:
        startMyApp(conn, room);
    }
});

function displaySignOnLink(conn) {
    var container = document.getElementById('sign-on-link-container');
    if (!container) {
        throw new Error('could not find element "#sign-on-link-container"')
    }

    var message = 'Log In with Google';
    var a = document.createElement('A');
    a.href = conn.loginUrl('google');
    a.appendChild(document.createTextNode(message));

    container.appendChild(a);
}