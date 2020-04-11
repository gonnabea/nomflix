import axios from "axios";

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
});

api.get("tv/popular",{
	params:{
		api_key:"6363d423c535019ac0a49bfc571cc2df",
		language:"en-US"
	}
	})
	.then(function(res){
		console.log(res);
	})
	.catch(function(err){
		console.log(err);
	});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: term => api.get("search/movie", {
        params:{
            query: encodeURIComponent(term)
        }
    })
}

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: (id) => api.get(`tv/${id}`),
    search: term => api.get("search/tv", {
        params:{
            query: encodeURIComponent(term)
        }
    })
}

export default api;