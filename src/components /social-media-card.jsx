import {faCode} from "@fortawesome/free-solid-svg-icons";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Card = () => {
    return (
        <StyledWrapper>
            <div className="parent">
                <div className="card">
                    <div className="logo">
                        <span className="circle circle1" />
                        <span className="circle circle2" />
                        <span className="circle circle3" />
                        <span className="circle circle4" />
                        <span className="circle circle5"><FontAwesomeIcon className={"text-white size-8"} icon={faCode} /> </span>
                    </div>
                    <div className="glass" />
                    <div className="content">
                        <span className="title">Stanislav Revasevych</span>
                        <span className="text">Hi, I&apos;m Stas — a young and passionate full-stack web developer from Ukraine.
                          I specialize in building clean, efficient, and scalable web applications using modern technologies on both frontend and backend.</span>
                    </div>
                    <div className="bottom">
                        <div className="social-buttons-container">
                            <button className="social-button .social-button1" onClick={() => window.open('https://www.instagram.com/starewych/', '_blank', 'noopener,noreferrer')}>
                                <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="svg">
                                    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                                </svg></button>
                            <button className="social-button social-button2" aria-label="GitHub" onClick={() => window.open('https://github.com/starewxz', '_blank', 'noopener,noreferrer')}>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="svg"
                                >
                                    <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.292 3.438 9.79 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.833 2.809 1.303 3.495.996.108-.774.418-1.304.762-1.604-2.665-.303-5.466-1.334-5.466-5.932 0-1.31.469-2.381 1.235-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.044.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.874.12 3.176.77.841 1.234 1.912 1.234 3.222 0 4.61-2.803 5.625-5.475 5.921.43.372.823 1.103.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .319.216.694.825.576C20.565 22.083 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                            </button>

                            <button className="social-button social-button3" aria-label="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/stanislav-revasevych-65201230b/', '_blank', 'noopener,noreferrer')}>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="svg"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.27h-3v-5.604c0-1.337-.025-3.064-1.867-3.064-1.868 0-2.155 1.459-2.155 2.967v5.701h-3v-10h2.881v1.367h.041c.401-.757 1.381-1.555 2.843-1.555 3.039 0 3.6 2 3.6 4.59v5.598z"/>
                                </svg>
                            </button>

                        </div>
                        <div className="view-more">
                            <button className="view-more-button" onClick={() => window.open('https://t.me/Sta_Rew')}>Contact me <FontAwesomeIcon icon={faChevronDown} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .parent {
    width: 400px;
    height: 400px;
    perspective: 1000px;
  }

  .card {
    height: 100%;
    border-radius: 50px;
      background: linear-gradient(135deg, #001EFF 0%, #00D4FF 100%);
      transition: all 0.5s ease-in-out;
      transform-style: preserve-3d;
      box-shadow: rgba(0, 30, 255, 0) 40px 50px 25px -40px, rgba(0, 212, 255, 0.2) 0px 25px 25px -5px;
  }

  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
    border-radius: 55px;
    border-top-right-radius: 100%;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.349) 0%, rgba(255, 255, 255, 0.815) 100%);
    /* -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px); */
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    transition: all 0.5s ease-in-out;
  }

  .content {
    padding: 100px 60px 0px 30px;
    transform: translate3d(0, 0, 26px);
  }

    .content .title {
        display: block;
        color: #001EFF;
        font-weight: 900;
        font-size: 20px;
    }

    .content .text {
        display: block;
        color: rgba(0, 30, 255, 0.76);
        font-size: 15px;
        margin-top: 20px;
    }


    .bottom {
    padding: 10px 12px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translate3d(0, 0, 26px);
  }

  .bottom .view-more {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: flex-end;
    transition: all 0.2s ease-in-out;
  }

  .bottom .view-more:hover {
    transform: translate3d(0, 0, 10px);
  }

    .bottom .view-more .view-more-button {
        background: none;
        border: none;
        color: #001EFF;
        font-weight: bolder;
        font-size: 12px;
    }

    .bottom .view-more .svg {
        fill: none;
        stroke: #001EFF;
        stroke-width: 3px;
        max-height: 15px;
    }


    .bottom .social-buttons-container {
    display: flex;
    gap: 10px;
    transform-style: preserve-3d;
  }

    .bottom .social-buttons-container .social-button {
        width: 30px;
        aspect-ratio: 1;
        padding: 5px;
        background: rgb(255, 255, 255);
        border-radius: 50%;
        border: none;
        display: grid;
        place-content: center;
        box-shadow: rgba(0, 30, 255, 0.5) 0px 7px 5px -5px; /* changed shadow color to blue */
    }

    .bottom .social-buttons-container .social-button:first-child {
        transition: transform 0.2s ease-in-out 0.4s, box-shadow 0.2s ease-in-out 0.4s;
    }

    .bottom .social-buttons-container .social-button:nth-child(2) {
        transition: transform 0.2s ease-in-out 0.6s, box-shadow 0.2s ease-in-out 0.6s;
    }

    .bottom .social-buttons-container .social-button:nth-child(3) {
        transition: transform 0.2s ease-in-out 0.8s, box-shadow 0.2s ease-in-out 0.8s;
    }

    .bottom .social-buttons-container .social-button .svg {
        width: 15px;
        fill: #001EFF;  /* changed fill to main blue */
    }

    .bottom .social-buttons-container .social-button:hover {
        background: #00D4FF; /* bright cyan */
    }

    .bottom .social-buttons-container .social-button:hover .svg {
        fill: white;
    }

    .bottom .social-buttons-container .social-button:active {
        background: #001EFF; /* deep blue on active */
    }

    .bottom .social-buttons-container .social-button:active .svg {
        fill: #00D4FF; /* cyan on active */
    }


    .logo {
    position: absolute;
    right: 0;
    top: 0;
    transform-style: preserve-3d;
  }

  .logo .circle {
    display: block;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 0;
    right: 0;
    box-shadow: rgba(0, 30, 255, 0.2) -10px 10px 20px 0px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background: rgba(0, 212, 255, 0.2);  
    transition: all 0.5s ease-in-out;
  }

  .logo .circle1 {
    width: 200px;
    transform: translate3d(0, 0, 20px);
    top: 8px;
    right: 8px;
  }

  .logo .circle2 {
    width: 170px;
    transform: translate3d(0, 0, 40px);
    top: 10px;
    right: 10px;
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
    transition-delay: 0.4s;
  }

  .logo .circle3 {
    width: 140px;
    transform: translate3d(0, 0, 60px);
    top: 17px;
    right: 17px;
    transition-delay: 0.8s;
  }

  .logo .circle4 {
    width: 110px;
    transform: translate3d(0, 0, 80px);
    top: 23px;
    right: 23px;
    transition-delay: 1.2s;
  }

  .logo .circle5 {
    width: 80px;
    transform: translate3d(0, 0, 100px);
    top: 30px;
    right: 30px;
    display: grid;
    place-content: center;
    transition-delay: 1.6s;
  }

  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow: rgba(0, 30, 255, 0.3) 30px 50px 25px -40px, rgba(0, 30, 255, 0.1) 0px 25px 30px 0px;
  }

  .parent:hover .card .bottom .social-buttons-container .social-button {
    transform: translate3d(0, 0, 50px);
    box-shadow: rgba(0, 30, 255, 0.2) -5px 20px 10px 0px;
  }

  .parent:hover .card .logo .circle2 {
    transform: translate3d(0, 0, 60px);
  }

  .parent:hover .card .logo .circle3 {
    transform: translate3d(0, 0, 80px);
  }

  .parent:hover .card .logo .circle4 {
    transform: translate3d(0, 0, 100px);
  }

  .parent:hover .card .logo .circle5 {
    transform: translate3d(0, 0, 120px);
  }`;

export default Card;
