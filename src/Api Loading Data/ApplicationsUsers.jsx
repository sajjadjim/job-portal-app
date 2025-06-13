export  const myApplicationsPromise = (email)=>{
    // console.log(email)
return fetch(`http://localhost:3000/applications?email=${email}` , {
    credentials:'include'
} )
.then(res => res.json())
// .then(data => {
//     // console.log(data)
// }) 
}

