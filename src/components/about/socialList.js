import React, { Component } from "react";

class SocialList extends Component {
  render() {
    return (
      <ul className="list-inline list-social-icons mb-0">
        {this.props.items.map(item => {
          return item.download ? (
            <li key={item.id} className="list-inline-item">
              <a
                target="_blank"
                download={item.download}
                rel="noopener noreferrer"
                href={item.aLink}
              >
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x" />
                  <i
                    className={`fab ${item.iconName} fa-stack-1x fa-inverse`}
                  />
                </span>
              </a>
            </li>
          ) : (
            <li key={item.id} className="list-inline-item">
              <a target="_blank" rel="noopener noreferrer" href={item.aLink}>
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x" />
                  <i
                    className={`fab ${item.iconName} fa-stack-1x fa-inverse`}
                  />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default SocialList;
