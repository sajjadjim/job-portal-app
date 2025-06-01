import React from 'react';
import { Link } from 'react-router';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    
    const jobData = useLoaderData();
    // console.log(jobData)
    const {_id, title, jobType, description, category, requirements, status, company_logo } = jobData;
    return (
        <div style={{
            maxWidth: '600px',
            margin: '40px auto',
            background: '#fff',
            borderRadius: '16px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
            padding: '32px',
            fontFamily: 'Segoe UI, sans-serif'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                {company_logo && (
                    <img
                        src={company_logo}
                        alt="Company Logo"
                        style={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'contain',
                            borderRadius: '12px',
                            marginRight: '24px',
                            background: '#f5f5f5',
                            border: '1px solid #eee'
                        }}
                    />
                )}
                <div>
                    <h2 style={{ margin: 0, fontSize: '2rem', color: '#2d3748' }}>{title}</h2>
                    <span style={{
                        background: '#e2e8f0',
                        color: '#4a5568',
                        borderRadius: '8px',
                        padding: '4px 12px',
                        fontSize: '0.95rem',
                        marginRight: '8px'
                    }}>{jobType}</span>
                    <span style={{
                        background: '#bee3f8',
                        color: '#2b6cb0',
                        borderRadius: '8px',
                        padding: '4px 12px',
                        fontSize: '0.95rem'
                    }}>{category}</span>
                </div>
            </div>
            <div style={{ marginBottom: '18px' }}>
                <h3 style={{ color: '#2b6cb0', marginBottom: '8px' }}>Job Description</h3>
                <p style={{ color: '#4a5568', lineHeight: 1.7 }}>{description}</p>
            </div>
            <div style={{ marginBottom: '18px' }}>
                <h3 style={{ color: '#2b6cb0', marginBottom: '8px' }}>Requirements</h3>
                <ul style={{ color: '#4a5568', paddingLeft: '20px' }}>
                    {Array.isArray(requirements) ? (
                        requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                        ))
                    ) : (
                        <li>{requirements}</li>
                    )}
                </ul>
            </div>
            <div style={{ marginBottom: '18px' }}>
                <strong>Status: </strong>
                <span style={{
                    color: status === 'Open' ? '#38a169' : '#38a169',
                    fontWeight: 600
                }}>
                    {status}
                </span>
            </div>
            <Link to={`/jobApply/${_id}`}><button className='btn btn-primary'>Apply</button></Link>
        </div>
    );
};

export default JobDetails;