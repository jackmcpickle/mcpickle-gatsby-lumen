import React from 'react';
import './style.scss';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      linkedin: author.linkedin,
      twitter: author.twitter,
      github: author.github,
      email: author.email,
      mobile: author.mobile
    };

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`mailto:${links.email}`}>

            </a>
          </li>
          <li className="links__list-item">
            <a href={`tel:+${links.mobile}`}>
              <i className="icon-clock" />
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`https://www.twitter.com/${links.twitter}`} target="_blank" rel="noopener noreferrer">
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.github.com/${links.github}`} target="_blank" rel="noopener noreferrer">
              <i className="icon-github" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`https://www.linkedin.com/in/${links.linkedin}`} target="_blank" rel="noopener noreferrer">
              <i className="icon-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
