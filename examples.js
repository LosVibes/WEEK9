fetch("https://jsonplaceholder.typicode.com/users")
    .then(users => {
        let alert(users.status);
        users.json()
    })
    .then(data => {
        // process response data
    });