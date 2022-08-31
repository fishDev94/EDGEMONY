const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=4e20f22505a0317004237194ab48d928";

const GET = async(type, specific, ext="") => {
  const res = await fetch(BASE_URL+type+'/'+specific+API_KEY+ext);
  return await res.json();
}

export { GET };