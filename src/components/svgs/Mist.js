import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Mist = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 421 417"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    height="500"
    width="500"
  >
    <path fill="none" d="M4.014 0h416.667v416.667H4.014z" />
    <g opacity=".5" fill="#646465">
      <path
        className="mist"
        d="M269.009 108.532a4.367 4.367 0 00-4.366-4.365H197.31a4.367 4.367 0 00-4.365 4.365v8.73a4.367 4.367 0 004.365 4.365h67.333a4.367 4.367 0 004.366-4.365v-8.73z"
      />
      <path
        className="mist"
        d="M296.656 299.404a4.367 4.367 0 00-4.366-4.365h-99.372a4.367 4.367 0 00-4.365 4.365v8.731a4.367 4.367 0 004.365 4.365h99.372a4.367 4.367 0 004.366-4.365v-8.731z"
      />
      <path
        className="mist"
        d="M330.447 261.754a4.367 4.367 0 00-4.365-4.365H164.663a4.367 4.367 0 00-4.366 4.365v8.73a4.367 4.367 0 004.366 4.365h161.419a4.367 4.367 0 004.365-4.365v-8.73z"
      />
      <path
        className="mist"
        d="M283.599 147.346a4.367 4.367 0 00-4.365-4.365H150.267a4.367 4.367 0 00-4.365 4.365v8.73a4.367 4.367 0 004.365 4.365h128.967a4.367 4.367 0 004.365-4.365v-8.73z"
      />
      <path
        className="mist"
        d="M296.656 223.837a4.367 4.367 0 00-4.366-4.365H134.406a4.367 4.367 0 00-4.365 4.365v8.731a4.367 4.367 0 004.365 4.365H292.29a4.367 4.367 0 004.366-4.365v-8.731z"
      />
      <path
        className="mist"
        d="M355.168 186.348a4.367 4.367 0 00-4.365-4.365H192.918a4.367 4.367 0 00-4.365 4.365v8.73a4.367 4.367 0 004.365 4.365h157.885a4.367 4.367 0 004.365-4.365v-8.73z"
      />
    </g>
  </svg>
);
Mist.propTypes = {
  className: PropTypes.string,
};

const mistMove = keyframes`
	0% {
		fill: #646465;
	}
	50% {
		fill: #c8c8c9;
	}
	100% {
		fill: #fafafb;
	}
`;

export default styled(Mist)`
  .mist {
    animation: ${mistMove} 3s ease infinite alternate;
    &:nth-child(2n) {
      animation-delay: 0.5s;
    }
  }
`;
