function lastCommit(user) {
    return fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': `token ${gitKey}`}})
        .then((data) => {
            // console.log(data);
            return data.json()
        }).then((jsonData) => {
            console.log(jsonData);
            return "Date is: " + jsonData[0].created_at + " user name is: " + jsonData[0].actor.display_login
        })
}

lastCommit('Rayglass').then((data) => console.log(data));