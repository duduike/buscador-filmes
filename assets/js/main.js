const searchForm = document.getElementById('searchForm');

searchForm.onsubmit = (ev) => {
    ev.preventDefault();
    
    const search = ev.target.searchMovie.value;

    console.log(search);

    if (search == '') {
        alert('Preencha o campo');
        return;
    }
}


const createMovieItem = (movie) => {
    const movieElement = document.createElement('div');
    movieElement.className = 'movies-item' 
    movieElement.innerHTML = `
    <img class="movies-item__img" src="https://image.tmdb.org/t/p/w200/${movie.poster_path}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    `;
    return movieElement;
};

const updateMoviesContainer = (tmdbData) => {
    const moviesContainer = document.getElementById('moviesContainer');
    moviesContainer.innerHTML = '';

    tmdbData.results.forEach(movie => {
        const movieElement = createMovieItem(movie);
        moviesContainer.appendChild(movieElement);
    });
};

(async () => {
    try {
        const tmdbData = await fetchingTmdbData();
        updateMoviesContainer(tmdbData);

    } catch (error) {
        console.error('Erro ao atualizar dados', error);
    }
})();