export  const myApplicationsPromise = (email)=>{
    // console.log(email)
return fetch(`https://server-code-job-website.vercel.app/applications?email=${email}`)
.then(res => res.json())
// .then(data => {
//     // console.log(data)
// }) 
}



//  export  const myApplicationsPromise = (email)=>{
//     // console.log(email)
// return fetch(`https://server-code-job-website.vercel.app/applications?email=${email}`)
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// }) 
//  }