'use strict';

// get User name from user input
function displayResults(){
    let user = responseJson[0].owner.login

    let userInfo = '<h2>${user}</h2>' + '<span>repos: ${responseJason.length}</span>' + 
    '<ul class="resolts-list"><ul>';

    $('#display-section').append(userInfo);
    $('#display-section').removeClass('hidden')
}

function watchForm(){
    console.log('getUserName ran');

    $('form').submit(event =>{
        event.preventDefault();
        getRepos();
    })  
}

// getting the data from the api
function getRepos(){
    console.log('getRepos ran');

    let username = $('#input').val();
    const url = `https://api.github.com/users/${username}/repos`;

    console.log(url);

    fetch(url)
        .then(response => {
            if (response.ok){
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => console.log(responseJson))
        .catch(err => {
            displayError(err.message);
        })
    displayResults();
};



watchForm();