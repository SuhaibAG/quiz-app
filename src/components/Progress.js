import React, { useEffect, useState } from 'react';
import './Progress.css';

function Progress({answers}) {
        const [timeLeft, setTimeLeft] = useState(100);

        console.log(answers)

        
        const handleTime = () => {
            if(timeLeft > 0){
                let newTime = timeLeft - 1
                setTimeLeft(newTime)
            }
            else{
                setTimeLeft("TIME IS UP")
            }
        };
        const interval = setInterval(handleTime, 1000);
    
        return (
            <div className="progress-bar">
                <table>
                    <thead>
                        <tr>
                        {Array.from({ length: answers.length }, (_, index) => (
                         <th key={index}
                             className={answers[index] !== null   ? 'answered' : 'unanswered'}
                         >  
                            Q{index + 1}</th>
                            ))}
                        <th className='Time'>
                            TIME: {timeLeft}    
                        </th>

                        </tr>
                               
                    </thead>
                </table>
            </div>
        );
    }


export default Progress;