import { LoremIpsum } from "react-lorem-ipsum";
function About({ footer }) {
  return (
    <div className="About d-flex justify-content-center align-items-center">
      <div className="row card col-sm-8 col-11 about-content">
        <div>
          <div className="card-head">
            <h4 className="p-sm-2 p-1">About Us</h4>
            <hr />
          </div>
          <LoremIpsum p={1} />
        </div>
      </div>
      <div className="footer-bottom mt-5">{footer}</div>
    </div>
  );
}

export default About;
