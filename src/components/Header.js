import React from 'react';
import '../styling/App.css';
import '../styling/Landing.scss';
import ReactTypingEffect from 'react-typing-effect';

// This is a functional component
function Header () {
  return <div className="landing">
    <div className="page-content">
      <h1 className="h3-text">Hello! I'm Solomon Samsudin Laxmidhar</h1>
      <h2 className="h4-text">
        I'm
        <ReactTypingEffect
          className="typingeffect"
          text={[
            ' a front end developer.',
            ' a back end developer.',
            ' a full stack developer.'
          ]}
          speed={100}
          eraseDelay={1000}
        />
      </h2>
      <a href="#tabs">Explore my stuff!</a>
    </div>
  </div>
}

export default Header;
