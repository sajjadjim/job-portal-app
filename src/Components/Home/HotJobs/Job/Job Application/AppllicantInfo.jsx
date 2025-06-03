import React from 'react';


const AppllicantInfo = ({ application }) => {
    // const applicationInfo = use(application);
    const { github, linkedin, cv, email } = application;
    // console.log(application)
    return (
        <div>
            <style>
                {`
                    .applicant-card {
                        border: 1px solid #e0e0e0;
                        border-radius: 8px;
                        padding: 20px;
                        max-width: 350px;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                        background: #fff;
                        transition: background 0.3s, box-shadow 0.3s;
                    }
                    .applicant-card:hover {
                        background: #f5faff;
                        box-shadow: 0 4px 16px rgba(0,0,0,0.10);
                    }
                `}
            </style>
            <div className="applicant-card">
                <h3>Applicant Info</h3>
                <p><strong>Email:</strong> {email}</p>
                <p>
                    <strong>GitHub:</strong>{' '}
                    <a href={github} target="_blank" rel="noopener noreferrer">{github}</a>
                </p>
                <p>
                    <strong>LinkedIn:</strong>{' '}
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a>
                </p>
                <p>
                    <strong>CV:</strong>{' '}
                    <a href={cv} target="_blank" rel="noopener noreferrer">View CV</a>
                </p>
            </div>
        </div>
    );
};

export default AppllicantInfo;