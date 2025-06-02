import React from 'react';
import UseAuth from '../../../../../Hooks/UseAuth';
import Swal from 'sweetalert2';
import axios, { Axios } from 'axios';
import { useParams } from 'react-router';

const JobApply = () => {

// Take the params use and get the url information 
    const {id : jobId} = useParams()
    // console.log(jobId)

    const { user } = UseAuth()
    // console.log(user)
    const handdleAppply = (e) => {
        e.preventDefault();
        const github = e.target.github.value;
        const linkedin = e.target.linkedin.value;
        const cv = e.target.cv.value;
        const applicantInfo = { github, linkedin, cv, email: user?.email  , jobId :jobId  }
        // console.log(applicantInfo)
        // Data send to the MongoDB Here code 
        
        axios.post('https://server-code-job-website.vercel.app/applications', applicantInfo)
        .then(res => {
            // console.log(res.data)
              if (res.data.insertedId) {
                    Swal.fire({
                        title: "Application Added successfully 🈸🈸🈸",
                        icon: "success",
                        draggable: true
                    });
                }
        })
        .catch(error => {
            alert("Error adding application:", error);
        });
        // fetch('https://server-code-job-website.vercel.app/applications', {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(applicantInfo)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log("AFter data add to the DB", data)
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: "Application Added successfully 🈸🈸🈸",
        //                 icon: "success",
        //                 draggable: true
        //             });
        //         }
        //     })
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Apply for Job</h1>
                <form className="space-y-5" onSubmit={handdleAppply}>
                    <div>
                        <label htmlFor="github" className="block text-gray-700 mb-1 font-medium">GitHub Username</label>
                        <input
                            type="text"
                            id="github"
                            name="github"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="linkedin" className="block text-gray-700 mb-1 font-medium">LinkedIn ID</label>
                        <input
                            type="text"
                            id="linkedin"
                            name="linkedin"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="cv" className="block text-gray-700 mb-1 font-medium">CV Link</label>
                        <input
                            type="url"
                            id="cv"
                            name="cv"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold"
                    >
                        Apply
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JobApply;



// {
//     "uid": "7zod0ypz4oWChX8TiBoYXN5XdF42",
//     "email": "sajjadjim@gmail.com",
//     "emailVerified": false,
//     "isAnonymous": false,
//     "providerData": [
//         {
//             "providerId": "password",
//             "uid": "sajjadjim@gmail.com",
//             "displayName": null,
//             "email": "sajjadjim@gmail.com",
//             "phoneNumber": null,
//             "photoURL": null
//         }
//     ],
//     "stsTokenManager": {
//         "refreshToken": "AMf-vBw6S4dDVmQkk21HHlIaPf8S0Gv8lgPUvrv_F9MH3r5uMU7k1CKkhT7nO31qGr8aJqcx_K_8HE01ktXD9anT50tVE9x1FRop6SN3WALQBRz1dP3aqaYte0ZDyqOP0QRicXTHaw5Zbv0CEXjx3OFmzaFC0KqIqDSFoUSxPZYOKr8bvlou7jAAvP263u2ZNODfFOwyknH9N4u8hyq3Agkkr7Hs-rantw",
//         "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlODk1YzQ3YTA0YzVmNmRlMzExMmFmZjE2ODFhMzUwNzdkMWNjZDQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vam9iLXBvcnRhbC1kMDdkMiIsImF1ZCI6ImpvYi1wb3J0YWwtZDA3ZDIiLCJhdXRoX3RpbWUiOjE3NDg4MDYwMDAsInVzZXJfaWQiOiI3em9kMHlwejRvV0NoWDhUaUJvWVhONVhkRjQyIiwic3ViIjoiN3pvZDB5cHo0b1dDaFg4VGlCb1lYTjVYZEY0MiIsImlhdCI6MTc0ODgwNjAwMCwiZXhwIjoxNzQ4ODA5NjAwLCJlbWFpbCI6InNhamphZGppbUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2FqamFkamltQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.VrlcVrzUCpv-9ACMuOnQxFh0-MgDXpjP6Q9XJr8jLEBRw9J2QMw3JbfZYR3yopBEiy0tjkBtMiJveEc2QRkxo4nPsZVUhS7LTp5eokE5V-fK9jw6zeBVmt3edqr6PK_31DWhiKwTdJeiY9aCVX8LZlBSiajfPr4WvacLIEmDTzk6eCp0BPh8uwTFs3cXWZ3ISJJGTkpQRS767wbpHyjnHU_VRgdSCyUCdPZplfbjTGJXAuU_tOea0Bz2bRQlZUXLw8gS7At-mdGj_C9VqeDWpvXQcRfvcAe_jQqW8JST2poeRoHc27FUK4pGnOKlUNOlruA13YDBruSClHmRBDCDFw",
//         "expirationTime": 1748809636797
//     },
//     "createdAt": "1748800617663",
//     "lastLoginAt": "1748806000798",
//     "apiKey": "AIzaSyAdgFk13CIFEsuVto1aInegMhy8wwVLZ3U",
//     "appName": "[DEFAULT]"
// }