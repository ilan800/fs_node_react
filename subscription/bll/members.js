const membersWs=require("../dal/members")


const getAllMembers=async()=>{
    const {data}=await membersWs.allMembers()
    let allusers=[]
    data.forEach(user => {
       us={name:user.name,email:user.email,city:user.address.city}
       allusers.push(us)
    })
    console.log(allusers)
}
const getbyid=async(id)=>{
    const {data}=await membersWs.memberById(id)
    console.log(data)
}

module.exports={getAllMembers,getbyid}