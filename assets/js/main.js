
const createMovieElement = (movie) => {
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
        const movieElement = createMovieElement(movie);
        moviesContainer.appendChild(movieElement);
    });
};

(async () => {
    try {
        const tmdbData = await fetchingTmdbData();
        console.log(tmdbData)
        updateMoviesContainer(tmdbData);

    } catch (error) {
        console.error('Erro ao atualizar dados', error);
    }
})();