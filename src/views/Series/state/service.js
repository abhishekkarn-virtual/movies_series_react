import axios from "axios";


export const getSeries=async()=>{
    const response=await axios({
        method:"GET",
        url:"http://localhost:5000/rest_api/series"
    });

    return response.data;
}