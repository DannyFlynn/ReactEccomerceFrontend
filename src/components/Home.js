import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home d-flex flex-column justify-content-center align-items-center text-center row m-0">
      <p className="text-white bg-success col-8">
        We are Sabatino's!!! We are the first italian food delivery service and
        cover all of Chippenham!!!
      </p>

      <Link to="/menu" className="text-white d-flex justify-content-center">
        <button className="btn btn-primary col-4 col-sm-1 home-btn">
          Order now
        </button>
      </Link>
    </div>
  );
}

export default Home;
