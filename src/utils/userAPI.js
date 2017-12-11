const BASE_URL = '/api/user/';

function signup(user) {
    return fetch(BASE_URL + 'signup', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res => {
        if (res.ok) return res.json();
        // if not res.ok, chances are duplicate email
        throw new Error('Email already taken!');
    })
    // Parameter destructuring 
    .then(({token}) => token);
}