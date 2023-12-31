import React from 'react'

export default function Main() {
  return (
    <div className='container'>
        <h1 className='title text-light'>QuizBuzz</h1>

        <ol>
            <li className='text-light'>Click on the "Start Quiz" button to start the quiz.</li>
            <li className='text-light'>You will be presented with a series of multiple-choice questions.</li>
            <li className='text-light'>Select the answer you think is correct by clicking on the radio button.</li>
            <li className='text-light'>Click on the "Next" button to go to the next question.</li>
            <li className='text-light'>Click on the "Previous" button to go to the previous question.</li>
            <li className='text-light'>Click on the "Submit" button to submit your answers.</li>
            <li className='text-light'>Click on the "View Results" button to view your results.</li>
        </ol>
        <form id='form'>
            <button type='button' className='btn btn-primary' id='start'>Start Quiz</button>
        </form>
    </div>
  )
}
