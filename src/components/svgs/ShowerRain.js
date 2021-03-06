import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const ShowerRain = ({ className }) => (
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
    <path fill="none" d="M4.091 0h416.667v416.667H4.091z" />
    <path
      className="dark-clouds"
      d="M174.632 157.905c-7.607-21.105 10.205-50.369 39.232-48.51 21.834 1.399 42.138 18.635 38.756 38.845 13.102-15.486 54.136-2.55 38.598 25.148 56.024 1.211 31.452 54.243 15.486 54.646-19.641.497-123.061-.43-147.231.753-9.193.449-24.076-25.424-23.712-37.499.377-12.487 15.629-38.91 38.871-33.383z"
      fill="#262626"
    />
    <path
      d="M138.742 177.214l-.001-.581c0-32.395 12.935-47.929 38.77-47.929 23.574 0 37.401 11.763 39.639 38.43 3.989-4.016 9.188-6.477 15.45-6.477 15.725 0 25.245 12.674 25.245 29.398 0 .682-.016 1.361-.047 2.035 9.94 1.29 19.901 5.288 26.759 12.666 13.978 15.037 5.396 36.164-13.267 41.137-2.308.615-6.798 1.853-10.284 1.892-23.778.267-105.349 5.718-132.386-.288-15.152-3.366-29.835-18.421-29.835-35.75 0-20.64 16.735-34.497 39.957-34.533z"
      fill="#eee"
    />
    <g fill="#267bd9">
      <path
        className="rains"
        d="M167.175 231.072s-10.339 9.13-12.087 14.005a6.652 6.652 0 004.014 8.504 6.653 6.653 0 008.504-4.014c1.749-4.875-.431-18.495-.431-18.495z"
      />
      <path
        className="rains"
        d="M155.656 259.286s-14.605 12.181-17.789 18.866a7.95 7.95 0 003.757 10.593 7.951 7.951 0 0010.594-3.758c3.184-6.685 3.438-25.701 3.438-25.701z"
      />
      <path
        className="rains"
        d="M192.853 242.522s-12.453 14.375-14.518 21.486c-1.224 4.212 1.203 8.625 5.415 9.849a7.952 7.952 0 009.85-5.415c2.065-7.111-.747-25.92-.747-25.92z"
      />
      <path
        className="rains"
        d="M177.735 284.455s-10.34 9.13-12.088 14.005a6.653 6.653 0 004.014 8.504 6.653 6.653 0 008.505-4.014c1.748-4.875-.431-18.495-.431-18.495z"
        fill="#8db0d6"
      />
      <path
        className="rains"
        d="M224.209 246.898s-10.339 9.13-12.088 14.005a6.653 6.653 0 004.014 8.504 6.654 6.654 0 008.505-4.014c1.748-4.875-.431-18.495-.431-18.495z"
      />
      <path
        className="rains"
        d="M210.225 274.174s-12.452 14.375-14.518 21.486c-1.224 4.212 1.203 8.625 5.415 9.849a7.952 7.952 0 009.85-5.415c2.065-7.111-.747-25.92-.747-25.92z"
      />
    </g>
  </svg>
);
ShowerRain.propTypes = {
  className: PropTypes.string,
};

const raining = keyframes`
	from {
		fill: #267bd9;
	}
	to {
		fill: #8db0d6;
	}
`;
const clouds = keyframes`
	from {
		transform: translateX(0px);
		fill: #565656;
	}
	to {
		transform: translateX(20px);
		fill: #4c4c4c;
	}
`;

export default styled(ShowerRain)`
  .dark-clouds {
    animation: ${clouds} 2s linear infinite alternate;
  }
  .rains {
    animation: ${raining} 1s linear infinite;
    fill: #267bd9;
    &:nth-child(2n) {
      animation-delay: 0.5s;
    }
  }
`;
