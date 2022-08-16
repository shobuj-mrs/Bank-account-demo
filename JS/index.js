document.getElementById('btn-submit').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (email === 'sontan@bap.com' && password === 'secret') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Tor akhane thakar kono drkr nei tui samanno password mone rakhte paris na toke  amra chini na');
    }
})