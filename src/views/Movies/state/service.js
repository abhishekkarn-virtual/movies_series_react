import axios from "axios";


export const getMovies=async()=>{
    const response=await axios({
        method:"GET",
        url:"http://localhost:5000/rest_api/movies"
    });

    return response.data;
}