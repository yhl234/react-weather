import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Location = ({ city, className }) => (
  <div className={className}>
    <h3>{city}</h3>
    <p>
      click <a href="/">here</a> to update
    </p>
  </div>
);

Location.propTypes = {
  city: PropTypes.string,
  className: PropTypes.string,
};
export default styled(Location)`
  justify-self: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    margin: 0;
    font-size: 400%;
  }
  p {
    margin: 0;
    transition: all 0.5s ease-in-out;
    color: grey;
    font-size: 80%;
  }
`;
