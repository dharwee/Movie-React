const API_KEY="6da89eafb867fb322b212735f7e272c8";
const BASE_URL="https://api.themoviedb.org/3";

export const getPopularMovies= async()=>{
    const response=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data= await response.json();
    return data.results;

};

