const moviesWs=require("../dal/moviesWs")


const getAllMovies=async()=>{
    const {data}=await moviesWs.allMovies()
    let allMovies=[]
    data.forEach(mo => {
       movie={id:mo.id,name:mo.name,Genres:mo.genres,Image:mo.image,Premiered:mo.premiered}
       allMovies.push(movie)
    })
    allMovies=allMovies.slice(0,19)
    console.log(allMovies)
}
const getbyid=async(id)=>{
    const {data}=await moviesWs.movieById(id)
    console.log(data)
}
//getAllMovies()
//getbyid(4)
module.exports={getAllMovies,getbyid}