import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = ({ errors }) => {
  return (
    <div>
      {errors && errors.response.data.error.code == 1006 ? (
        <p> please provide valid city name</p>
      ) : (
        <p>Something went wrong</p>
      )}
      <Link to="/">Try again</Link>
    </div>
  );
};

export default ErrorPage;
