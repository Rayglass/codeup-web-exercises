const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// const threeLanguages = users.filter((user)=> {
//     return user.languages.length >= 3;
// });
//
// console.log(threeLanguages);


const userObjects = users.filter(user => user.languages.length >= 3);
console.log(userObjects);


// TODO Use .map to create an array of strings where each element is a user's email address
// const emailAddy = users.map((user)=> {
//     return user.email
//
// });
//
// console.log(emailAddy);

const emails = users.map(user => user.email);
console.log(emails);

// TODO Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const experience = users.reduce((stack, user) => {return stack + user.yearsOfExperience; }, 0);

console.log(experience);
console.log(experience / users.length);


// TODO Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((longest,user)=>{
    if(user.email.length > longest.length){
        longest=user.email;
    }
    return longest;
},"a");

console.log(longestEmail);

// TODO Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const greeting = users.reduce((names,user)=>`${names} ${user.name}`,"Your instructors are: ");

console.log(greeting);

// TODO Use .reduce to get the unique list of languages from the list of users.

const uniqueLang = users.reduce((languages,user)=>{
    user.languages.forEach(language=>{
        if (!languages.includes(language)){
            languages.push(language);
        }
    });
    return languages
},[]);

console.log(uniqueLang);