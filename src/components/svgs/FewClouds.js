import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const FewClouds = ({ className }) => (
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
    <path fill="none" d="M3.106 0h416.667v416.667H3.106z" />
    <g>
      <circle
        className="sun"
        cx="264.18"
        cy="193.691"
        r="73.012"
        fill="#ec6e4c"
      />
    </g>
    <path
      d="M137.137 201.869a185.51 185.51 0 01-.002-.748c0-41.714 16.657-61.717 49.923-61.717 30.356 0 48.16 15.147 51.042 49.486 5.137-5.172 11.831-8.341 19.894-8.341 20.249 0 32.508 16.32 32.508 37.855 0 .879-.02 1.752-.061 2.621 12.8 1.661 25.626 6.81 34.458 16.31 17.999 19.362 6.947 46.567-17.084 52.97-2.972.792-8.754 2.386-13.242 2.436-30.619.345-135.656 7.364-170.471-.37-19.51-4.335-38.416-23.72-38.416-46.035 0-26.577 21.548-44.421 51.451-44.467z"
      fill="#eee"
    />
  </svg>
);

FewClouds.propTypes = {
  className: PropTypes.string,
};

const rasing = keyframes`
from {
      r: 15%;
    }
    to {
      r: 20%;
    }
`;

export default styled(FewClouds)`
  .sun {
    animation: ${rasing} 3s linear infinite alternate;
  }
`;
