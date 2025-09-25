async function getGitInfo(apiEndpoint) {
    try {
        
        const response = await fetch(apiEndpoint);
        
        // check if request was successfull
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // console.log("something")
        const data = await response.json();

        const name = data.login;
        const numRepos = data.public_repos;
        console.log(name, numRepos);
    } catch (error) {
        console.error("Error:", error);
    }
}
const apiEndpoint = "https://api.github.com/users/ammadakram";

getGitInfo(apiEndpoint);
