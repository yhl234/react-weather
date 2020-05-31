import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const ClearSky = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 417 417"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    height="500"
    width="500"
  >
    <path fill="none" d="M0 0h416.667v416.667H0z" />
    <circle
      className="sun"
      cx="208.333"
      cy="208.333"
      r="102.388"
      fill="#ec6e4c"
    />
  </svg>
);

ClearSky.propTypes = {
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

export default styled(ClearSky)`
  .sun {
    animation: ${rasing} 3s linear infinite alternate;
  }
`;
