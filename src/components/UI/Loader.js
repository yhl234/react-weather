import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Loader = ({ className }) => (
  <div className={`${className}`}>Loading...</div>
);

Loader.propTypes = {
  className: PropTypes.string,
};

const load1 = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
`;

export default styled(Loader)`
  color: #717171;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  &,
  &::before,
  &::after {
    background: #717171;
    -webkit-animation: ${load1} 1s infinite ease-in-out;
    animation: ${load1} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }
  &::before,
  &::after {
    position: absolute;
    top: 0;
    content: '';
  }
  &::before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &::after {
    left: 1.5em;
  }
`;
