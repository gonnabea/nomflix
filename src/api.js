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



export default api;