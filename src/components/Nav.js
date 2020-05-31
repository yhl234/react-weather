import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Nav = ({ className }) => {
  const [showNav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!showNav);
  };

  return (
    <header className={showNav ? `${className} show` : `${className} `}>
      <div
        className="nav-toggle"
        onClick={handleClick}
        onKeyPress={handleClick}
        role="button"
        tabIndex={0}
      >
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>
      <nav>
        <ul>
          <li>
            Created By<a href="https://louislee.best/"> Louis</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
Nav.propTypes = {
  className: PropTypes.string,
};

export default styled(Nav)`
  position: relative;
  transition: all 0.5s ease;
  width: 100%;
  height: 50px;
  .nav-toggle {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 2;
    display: grid;
    span {
      height: 8px;
      width: 40px;
      border: 1px solid #666;
      margin: 3px;
      background: #666;
      transition: all 0.5s ease;
      transform-origin: left;
    }
  }
  nav {
    position: fixed;
    background: pink;
    bottom: 0;
    width: 0;
    height: 100vh;
    max-height: 100vh;
    z-index: 1;
    transition: all 0.5s ease;
    ul {
      display: none;
      list-style: none;
      padding-left: 0;
      position: relative;
      text-align: center;
    }
  }
  &.show {
    .nav-toggle {
      .top {
        transform: rotate(45deg);
      }
      .middle {
        opacity: 0;
      }
      .bottom {
        transform: rotate(-45deg);
      }
    }
    nav {
      width: 50vh;
      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
`;
