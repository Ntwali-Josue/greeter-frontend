import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <h1 className="display-4 mb-5 text-center">
      <span className="text-primary font-weight-bold">Greeter</span>
    </h1>
    <div className="vw-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <Link
            to="/greeting"
            className="btn btn-lg btn-primary"
            role="button"
          >
            Greet Me
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default Home;
