// sign up
function signup() {
    var email = document.getElementById('semail').value;
    var password = document.getElementById('spass').value;
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', password)
    location.href = './signin.html'
}

// sign in
function signin() {
    var email = document.getElementById('lemail').value;
    var password = document.getElementById('lpass').value;
    if (localStorage.getItem('Email') == email && localStorage.getItem('Password') == password) {
        // alert('Welcome User');
        location.href = './welcome.html'
    } else {
        alert('sorry sign up plz ');
        location.href = './signup.html'
    }
}
