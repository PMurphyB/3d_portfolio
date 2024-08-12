import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1) {
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold ">Payton</span> 👋
      <br />
      A Computer Science student from Olathe, KS.
    </h1>
    )
  }

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        🎵I love to play music <br /> and I have played across the country!🎵
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain'/>
        </Link>
      </div>
    );
  }

  return null

}

/*
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold ">Payton</span> 👋
      <br />
      A Computer Science student from Olathe, KS.
    </h1>
  ),
  2: (
    <InfoBox />
  ),
  3: (
    <h1>3</h1>
  ),
  4: (
    <h1>4</h1>
  ),
  5: (
    <h1>5</h1>
  )
}
  
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

*/

export default HomeInfo