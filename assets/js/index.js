window.addEventListener('load', function() {
    const moviesSection = document.querySelector('#movies-container');
    const nextButton = document.querySelector('#next');
    const previousButton = document.querySelector('#prev');
    const errorBadge = document.querySelector('#error-badge');



    const endPoint = "assets/mockData/data.json"; //'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?page=1';
    const headers = {
        "X-RapidAPI-Key": "cea8f882f0msh261f8eec46fd5c0p11a39cjsn5eb4ce897a92",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
    };
    displayMovies();

    async function getMovies(){
        const response = await fetch(endPoint, {
            headers: headers
        });

        if(!response.ok){
            errorBadge.style.display = 'block';
            throw new Error('Network response was not ok');
            return;
        }
        const data = await response.json();
        return data;
    }

        
    async function displayMovies(){
        const movies = await getMovies();
        for(let i = 0; i < movies.length; i++){
            const movieCard = `  
            <div class="movie">
            <h2>${movies[i].title}</h2>
            </div>`;

            moviesSection.innerHTML += movieCard;
        }

        const movieCards = document.querySelectorAll('.movie');
        movieCards.forEach(function(movieCard){
            movieCard.addEventListener('click', function(){
                //display movie details
                console.log(this.children[0].textContent);
            });
        });

    }

    nextButton.addEventListener('click', function(){
        //load more movies

    });


    previousButton.addEventListener('click', function(){
        // load previous movies sets


    });

});