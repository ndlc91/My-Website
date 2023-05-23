import React from 'react'


const Resume = () => {
    return (
        <div className='flex flex-col items-center pt-20'>
            <div className='w-3/4 bg-white flex flex-col items-center border-yellow-500 border-2'>
                <h1 className='font-serif text-6xl pb-10'>
                    Resume
                </h1>
                <h2 className='font-serif text-2xl'>
                    Education
                </h2>
                <h2 className='font-serif text-2xl'>
                    Skills
                </h2>
                <h2 className='font-serif text-2xl'>
                    Experience
                </h2>
                <div className='ml-10'>
                    <h3 className='font-bold'>
                        Dwell Bible
                    </h3>
                    <ul>

                        <li className='list-disc'>
                            Responsible for establishing systems and procedures for recording and editing audio from the launch of the company as well as overseeing 3000+ hours of recorded and licensed audio products.
                        </li>
                        <li className='list-disc'>
                            Oversaw multiple long-term recording projects, working with a team of 10+ employees and freelancers.  Responsible for project planning, including setting and designing project objectives, project planning, and execution.
                        </li>
                        <li className='list-disc'>
                            Oversaw employees on the audio team, including hiring, mentorship, and development.
                        </li>
                        <li className='list-disc'>
                            Close coordination with company founders and technical lead  to determine technical requirements for new products.
                        </li>
                    </ul>
                    <h3 className='font-bold'>
                        Lucas Christian Academy
                    </h3>
                    <ul>
                        <li className='list-disc'>
                            Led weekly meetings of department heads in the arts department, as well as regular communication with parents and students, which often included mediation, problem-solving, and conflict resolution.
                        </li>
                        <li className='list-disc'>
                            Coordinated and set lesson plans for the department, which culminated in an end-of-semester concert for 1,000+ students and their families.
                        </li>
                    </ul>
                </div>


            </div>

        </div>
    )
}

export default Resume