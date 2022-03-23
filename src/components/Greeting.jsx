import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getGreeting } from '../redux/reducers/greeting';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  const { greeting } = useSelector((state) => state.greeting);
  const randomGreeting = greeting.map((g) => g.message);
  return (
    <div className="text-center mt-5">
      <h1 className="text">{randomGreeting}</h1>
      {' '}
      <br />
      <button className="btn btn-lg btn-primary" type="button" onClick={() => window.location.reload(false)}>Greet me again!</button>
      <Link to="/" className="btn btn-lg btn-secondary m-4">Back to Home</Link>
    </div>
  );
};

export default Greeting;
