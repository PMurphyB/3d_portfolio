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

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Looking for a new dev eager to learn? <br /> I'm just a few keystrokes away!
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Let's talk!
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>

      </div>
    );
  }

  // Fix this!
  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          I have competed in numerous bike races across the country! <br/> Both on mountains and gravel!
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          See what I've done
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    )
  }

  if (currentStage === 5) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          I have worked on numerous fun and inventive projects! <br/> Curious to see what?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          See my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain'/>
        </Link>
      </div>
    )
  }

  

  return null

}

export default HomeInfo