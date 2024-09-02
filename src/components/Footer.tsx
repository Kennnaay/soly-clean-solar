import React, { FC } from "react";
import "../Footer.scss";
const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-column">
          {/* Content for the left column */}
          <ul className="leftText">
            <li> Test</li>
            <li> Test 2</li>
            <li> Test 3</li>
          </ul>
        </div>
        <div className="right-column">
          {/* Content for the right column */}
          <p className="rightText">Right Column Content</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
