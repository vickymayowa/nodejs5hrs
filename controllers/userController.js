

const login = ((req,res)=>{
    console.log(req.body)
    res.status(200).json({ message : "Welcome to the login route" , status:true})
})

const  getUsers= ((req,res)=>{
    const users = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    role: "admin",
    isActive: true
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "janesmith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    role: "user",
    isActive: false
  },
  {
    id: 3,
    name: "Robert Brown",
    username: "robertbrown",
    email: "robert.brown@example.com",
    phone: "456-789-1234",
    role: "moderator",
    isActive: true
  },
  {
    id: 4,
    name: "Emily White",
    username: "emilywhite",
    email: "emily.white@example.com",
    phone: "321-654-9870",
    role: "user",
    isActive: true
  }
];

res.status(200).json({ message : "Users Fetched SuccessFully" , status:true , users})

})


module.exports = { login, getUsers }