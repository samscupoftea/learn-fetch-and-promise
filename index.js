
// challenge 1
// const pokePromise = fetch("")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// console.log(pokePromise);

// task 1

// Write a getUser function that takes a username argument
// It should fetch that user’s profile from "https://api.github.com/users/USERNAME_HERE

function getUser(username) {
    const user_url = `https://api.github.com/users/${username}`
    return fetch(user_url).then((response) => response.json());
}
getUser("oliverjam").then((user) => console.log(user))
.catch((error) => console.log(error));

// Task 2 
// Write a getRepos function that takes the Github user response object as an argument.
// Fetch the a user using getUser, then use getRepos to fetch their repos using the repos_url property from the user object.
// Log the array of repos.

function getRepos(user){
    return fetch("https://api.github.com/users/oliverjam/repos");
}

getUser("oliverjam")
.then(getRepos)
.then(console.log)
.catch(console.error);