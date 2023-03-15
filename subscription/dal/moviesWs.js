const axios =require("axios")

const allMovies=async()=>{
    const movies=await axios.get("https://api.tvmaze.com/shows")
    return movies
}

const movieById=async(id)=>{
    const movie=await axios.get(`https://api.tvmaze.com/shows/${id}`)
    return movie
}

module.exports={allMovies,movieById}
