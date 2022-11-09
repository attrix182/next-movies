export const getMovies = async() => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1');
    const data = await response.json();
    return data;
}