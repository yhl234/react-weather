import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showNav: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ showNav: !prevState.showNav }));
  }

  render() {
    const { showNav } = this.state;
    return (
      <header className={showNav ? 'show' : ''}>
        <div
          className="nav-toggle"
          onClick={this.handleClick}
          onKeyPress={this.handleClick}
          role="button"
          tabIndex={0}
        >
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </div>
        <nav>
          <ul>
            <li>
              Created By<a href="https://louislee.best/"> Louis</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Nav;
