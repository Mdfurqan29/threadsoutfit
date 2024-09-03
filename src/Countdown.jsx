/* eslint-disable react/no-unescaped-entities */
import  { useState, useEffect } from 'react';
import './Countdown.css'; // External CSS file for styling
import { FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa"; 

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-10-01T00:00:00');
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className="time-box" key={interval}>
        <span className="time">{timeLeft[interval]}</span>
        <span className="label">{interval}</span>
      </div>
    );
  });

  return (
    <>
    <div className="countdown-container">
    <div className="logo-container">
        <img src="./logo.png" alt="Logo" className="logo" />
      </div>

      <h1>Coming Soon...</h1>
      <div className="timer">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
      <div className="social-icons">
        <a href="https://facebook.com/threadsoutfitt" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://instagram.com/threadsoutfit_" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.tiktok.com/@threadsoutfit.com?_t=8pQHpvmPK5g&_r=1" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={30} />
        </a>
        <a href="https://wa.me/923283578075" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} />
        </a>
      </div>
    </div>
    </>
  );
}

export default Countdown;
