const {Client} = require('pg')
const express = require("express")

const client = new Client({
  user:"postgres",
  password:"rithikdutt",
  host:"localhost",
  port:5432,
  database:"daa"
})
module.exports = (req, res) => {
    const data1 = [req.body.email,req.body.password ]
    execute(data1)
    // logic to save user in db
    // generate auth session
    // Cookie 
    // response sessionid
    // Session=>User DB store expiry
    // Front end /session/rithik 
    res.status(200).json( {message: "User login successfully"} );
};

async function execute(data1){
  await connect();
  const results = await search(data1)
  if(results == true){
    console.log("User found")  
  }
  else{
    console.log("User not found")
  }
}
async function connect(){
  try{
    await client.connect()
    console.log("Connected!")
  }
  catch(e){
    console.log(`Error occured ${e}`)
    await client.query("ROLLBACK")
  }
}
async function search(data1){
  try{
    await client.query("select email,password from userss where email =$1 ,where password=$2",['duttrithik@gmail.com','rithikdutt']);
    return true
  }
  catch(e){
    return false
  }
}