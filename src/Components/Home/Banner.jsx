import React from 'react';
import { color, motion } from "motion/react"

import team1 from '../../../public/Team Celebrate/team1.jpg'
import team2 from '../../../public/Team Celebrate/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <div className='flex-1'>
                        <motion.img
                        animate={{
                            y:[0 , 100 , 0]
                        }}
                        transition={{duration:5 , repeat: Infinity}}
                            src={team1}
                            className="max-w-sm border-l-8 border-b-8 border-blue-500 rounded-t-4xl rounded-lg shadow-2xl"
                        />
                    </div>
                    <div className='flex-1'>
                        <motion.img 
                         animate={{
                            x:[100 , 150 , 100]
                        }}
                        transition={{duration:5 , repeat: Infinity}}
                        src={team2} className="max-w-sm border-l-8 border-b-8 border-blue-500 rounded-t-4xl rounded-lg shadow-2xl" alt="" />
                    </div>
                </div>
                <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                >
                    <h1 className="text-5xl font-bold">Remote <motion.span
                        animate={
                            {
                                color: ['#5533ff', '#ff6133', 'yellow', '#33ddff', '#ff33e0'],
                                transition: { duration: 10, repeat: Infinity }
                            }
                        }
                    >Jobs</motion.span> For YOU</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;