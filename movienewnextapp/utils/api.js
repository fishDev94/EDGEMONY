const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = `?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

const GET = async (type, specific, ext = "") => {
  const res = await fetch(BASE_URL + type + "/" + specific + API_KEY + ext);
  return await res.json();
};

export { GET };

// search link = https://api.themoviedb.org/3/search/companyAPI_KEY&query=film&page=1

// type = "search";
// specific ="company";
// ext= `&query=${searchQuery}&page=${pageNumber}`
// pageNumber = "1";

// result= `https://api.themoviedb.org/3/${type}/${specific}${API_KEY}${ext}`

// https://api.themoviedb.org/3/movie/popular?api_key=API_KEY&language=en-US&page=1

// type: 'movie';
// specific: 'popular'
// ext: "&page=1&include_adult=false"
