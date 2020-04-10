import React from 'react';

class ClearSky extends React.Component {
  render() {
    return (
      <svg
        viewBox="0 0 417 417"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
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
  }
}
export default ClearSky;
