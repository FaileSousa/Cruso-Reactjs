import axios from 'axios'

// base da URL: https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/movie/now_playing?api_key=b843c530eafac4824f56855af4eff3fa

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api