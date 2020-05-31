import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const BrokenClouds = ({ className }) => (
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
    <path fill="none" d="M.985 0h416.667v416.667H.985z" />
    <path
      className="dark-clouds"
      d="M160.654 180.129c-9.795-27.176 13.141-64.86 50.518-62.465 28.115 1.801 54.26 23.996 49.906 50.02 16.871-19.942 69.709-3.285 49.701 32.382 72.141 1.559 40.5 69.846 19.94 70.366-25.291.639-158.461-.553-189.584.969-11.837.579-31.002-32.737-30.533-48.286.485-16.079 20.124-50.104 50.052-42.986z"
      fill="#262626"
    />
    <path
      d="M114.441 204.992c-.002-.248-.002-.498-.002-.748 0-41.714 16.656-61.717 49.923-61.717 30.355 0 48.159 15.147 51.042 49.486 5.136-5.172 11.831-8.341 19.894-8.341 20.249 0 32.507 16.32 32.507 37.855 0 .878-.02 1.752-.061 2.621 12.8 1.661 25.626 6.809 34.458 16.31 17.999 19.362 6.948 46.567-17.084 52.97-2.971.792-8.754 2.386-13.242 2.436-30.618.345-135.656 7.364-170.47-.37-19.511-4.335-38.417-23.72-38.417-46.035 0-26.577 21.548-44.421 51.452-44.467z"
      fill="#eee"
    />
  </svg>
);
BrokenClouds.propTypes = {
  className: PropTypes.string,
};

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

export default styled(BrokenClouds)`
  .dark-clouds {
    animation: ${clouds} 2s linear infinite alternate;
  }
`;
