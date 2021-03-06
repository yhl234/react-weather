import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const Rain = ({ className }) => (
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
    <path fill="none" d="M3.03 0h416.667v416.667H3.03z" />
    <circle cx="255.01" cy="169.5" r="60.422" fill="#ec6e4c" />
    <path
      d="M149.873 176.268l-.001-.619c0-34.521 13.784-51.075 41.314-51.075 25.122 0 39.855 12.535 42.241 40.953 4.251-4.28 9.791-6.902 16.464-6.902 16.757 0 26.901 13.505 26.901 31.327 0 .727-.016 1.45-.05 2.168 10.593 1.375 21.207 5.636 28.516 13.498 14.896 16.024 5.75 38.537-14.138 43.836-2.459.656-7.245 1.975-10.958 2.017-25.339.285-112.264 6.093-141.076-.307-16.146-3.587-31.792-19.63-31.792-38.097 0-21.994 17.832-36.761 42.579-36.799z"
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
Rain.propTypes = {
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

export default styled(Rain)`
  .rains {
    animation: ${raining} 1s linear infinite;
    fill: #267bd9;
    &:nth-child(2n) {
      animation-delay: 0.5s;
    }
  }
`;
