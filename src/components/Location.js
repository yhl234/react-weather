/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isUpdating: false };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState(prevState => ({ isUpdating: !prevState.isUpdating }));
    setTimeout(
      () => this.setState(prevState => ({ isUpdating: !prevState.isUpdating })),
      2000
    );
  }

  render() {
    const { isUpdating } = this.state;
    return (
      <div className="city">
        <h3>Toronto</h3>
        <div className={isUpdating ? 'loader' : ''}></div>
        <p className={isUpdating ? 'hide' : ''}>
          click{' '}
          <a href="/" onClick={this.update} role="button" tabIndex={0}>
            here
          </a>{' '}
          to update
        </p>
      </div>
    );
  }
}
export default Location;
