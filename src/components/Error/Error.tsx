import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './Error.css';
const errorIcon = require('../../assets/images/error.png');

const Error = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location?.state) {
      navigate('/');
    }
  }, [location, navigate]);
  return (
    <>
      {location.state && (
        <div className="error">
          <img src={errorIcon} alt="error" />
          <p className="error-message">{location.state.error.message}</p>
        </div>
      )}
    </>
  );
};

export default Error;
