const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmMxMDBjMDMwNzdjYTA4OTU0Y2Y5MTliODU2MzhmYyIsInN1YiI6IjY1OGQ2YzE1YzA0NDI5NzgxNTg0NTA4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rOutSyOp-__8mgjTURUXuiOtGWV4dshJxVQXjaiO13s'
    }
};

async function fetchingTmdbData() {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-br&page=1';
    const fetching = await fetch(url, options);
    const data = await fetching.json();
    return data;
};

