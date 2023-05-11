//TODO Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made.


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


//TODO Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

const wait = (number) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },number)
    })
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


//TODO make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.


