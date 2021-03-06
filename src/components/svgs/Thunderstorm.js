import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Thunderstorm = ({ className }) => (
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
    <path fill="none" d="M1.969 0h416.667v416.667H1.969z" />
    <path
      className="dark-clouds"
      d="M167.089 160.33c-8.699-24.132 11.669-57.595 44.86-55.469 24.967 1.599 48.183 21.309 44.317 44.418 14.981-17.708 61.902-2.917 44.134 28.756 64.062 1.384 35.965 62.024 17.708 62.485-22.459.568-140.715-.491-168.353.861-10.511.514-27.529-29.071-27.113-42.879.431-14.278 17.87-44.492 44.447-38.172z"
      fill="#262626"
    />
    <path
      d="M126.051 182.409l-.002-.665c0-37.041 14.791-54.804 44.332-54.804 26.956 0 42.766 13.45 45.326 43.944 4.561-4.593 10.506-7.407 17.666-7.407 17.981 0 28.867 14.492 28.867 33.615 0 .78-.018 1.556-.055 2.327 11.367 1.476 22.756 6.047 30.599 14.484 15.984 17.194 6.17 41.352-15.171 47.038-2.638.703-7.773 2.118-11.758 2.163-27.19.306-120.464 6.539-151.379-.329-17.326-3.849-34.114-21.064-34.114-40.879 0-23.601 19.134-39.446 45.689-39.487z"
      fill="#eee"
    />
    <path
      className="lightings"
      d="M132.831 311.902l19.748-45.546-14.633.143 22.709-46.974 25.288.329-15.591 29.016 20.061-.516-57.582 63.548z"
      fill="#fc0"
    />
  </svg>
);
Thunderstorm.propTypes = {
  className: PropTypes.string,
};

const lighting = keyframes`
from {
		fill: #f4e39e;
	}
	to {
		fill: #fc0;
	}
`;
export default styled(Thunderstorm)`
  .lightings {
    animation: ${lighting} 1s ease infinite alternate;
  }
`;
