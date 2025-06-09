export  const myApplicationsPromise = (email)=>{
    // console.log(email)
return fetch(`https://server-code-job-website.vercel.app/applications?email=${email}` , {
    credentials:'include'
} )
.then(res => res.json())
// .then(data => {
//     // console.log(data)
// }) 
}

