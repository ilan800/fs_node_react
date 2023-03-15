const axios = require("axios")

const allMembers=async()=>{
    const members=await axios.get("http://jsonplaceholder.typicode.com/users")
    return members
}

const memberById=async (id)=>{
    const member=await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
    return member
}

module.exports={allMembers,memberById}
