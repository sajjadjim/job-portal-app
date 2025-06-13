import React from 'react';
import { AuthContext } from '../../../AuthContext/AuthContext';
import { use } from 'react';
import axios from 'axios';

const AddJobForm = () => {
    const { user } = use(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        // Process salary Range data Make List type 
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency }

        // process requirements to array style formate 
        const requirementsString = newJob.requirements;
        const requirementsArray = requirementsString.split(',').map(req => req.trim());
        newJob.requirements = requirementsArray;
        // console.log(newJob)
        e.target.reset(); // Reset form

    axios.post('http://localhost:3000/jobs', newJob)
    .then(res =>{
        console.log(res)
    })
    .catch(error =>{
        alert(error.massage);
        console.error('Error adding job:', error);
    })
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
            <h2 className="text-2xl font-semibold mb-6">Add a Job</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <input name="title" placeholder="Job Title" className="input" />
                <input name="location" placeholder="Location" className="input" />

                <select name="jobType" className="custom-select">
                    <option value="">Select Job Type</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Offline">Offline</option>
                </select>

                <input name="category" placeholder="Category" className="input" />

                <input type="date" name="applicationDeadline" className="input" />
                <input name="company" placeholder="Company Name" className="input" />

                <input name="min" placeholder="Min Salary" type="number" className="input" />
                <input name="max" placeholder="Max Salary" type="number" className="input" />

                <input name="currency" placeholder="Currency (e.g., BDT)" className="input" />
                <input name="company_logo" placeholder="Company Logo URL" className="input" />

                <input name="hr_email" placeholder="HR Email" defaultValue={user.email} className="input" readOnly />
                <input name="hr_name" placeholder="HR Name" className="input" />

                <select name="status" defaultValue="active" className="custom-select border-[1px]">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>

                <textarea name="description" placeholder="Job Description" className="textarea md:col-span-2" />
                <textarea name="responsibilities" placeholder="Responsibilities (comma-separated)" className="textarea md:col-span-2" />

                {/* Replace dynamic requirements management with a single input for comma-separated skills */}
                <input
                    name="requirements"
                    placeholder="Requirements (comma-separated)"
                    className="input md:col-span-2"
                />

                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 md:col-span-2">
                    Submit & Reset
                </button>
            </form>
        </div>
    );
};

export default AddJobForm;
