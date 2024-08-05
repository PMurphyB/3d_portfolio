import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className="info_box">
    {text}
    <Link to={link}>
      {btnText}
    </Link>
  </div>
)

const renderContent = {
  5: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi I am <span className="font-semibold">Payton</span> 👋
      <br/>
      A Software Engineer from Olathe, KS
    </h1>
  ),
  1: (
    <InfoBox />
  ),
  2: (
    <h1>2</h1>
  ),
  3: (
    <h1>3</h1>
  ),
  4: (
    <h1>4</h1>
  ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo