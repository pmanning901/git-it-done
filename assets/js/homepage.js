var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos");
  };

getUserRepos();

var response = fetch("https://api.github.com/users/octocat/repos");
console.log(response);

fetch("https://api.github.com/users/octocat/repos").then(function(response) {
  response.json().then(function(data) {
    console.log(data);
  });
});