export  const createJobsByMePromise = (email)=>{
return fetch(`https://server-code-job-website.vercel.app/jobs?email=${email}`)
.then(res => res.json()) 
}

