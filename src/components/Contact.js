import React from "react";
import { Link } from "react-router-dom";

function Contact({ footer }) {
  const emailOrPhone = (action) => {
    window.location.href = action;
  };
  return (
    <div className="Contact d-flex justify-content-center align-items-center">
      <div className="row card col-sm-8 col-11 about-content">
        <div>
          <div className="card-head d-flex flex-column">
            <h3 className="p-sm-2 p-2">Contact</h3>
            <hr />
            <Link
              className="p-sm-2 p-2"
              onClick={() => emailOrPhone("mailto:flynny386@gmail.com")}
            >
              Email: flynny386@gmail.com
            </Link>

            <Link
              className="p-sm-2 p-2"
              onClick={() => emailOrPhone("tel:+07895457593")}
            >
              Tel: 07895457214
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">{footer}</div>
    </div>
  );
}

export default Contact;
