import React, { useState } from "react";

const UserInput = ({ details, error }) => {
  const { city, setCity, searchCity, setSearchCity, celsius, setCelsius } =
    details;
  const [inputError, setInputError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (city?.trim() !== "") {
      setInputError(false);
      setSearchCity(city.trim());
    } else {
      setInputError(true);
    }
  }
  return (
    <div className="parent-form">
      <div className="parent-buttons">
        <form className="user-form">
          <input
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="user-input"
          />
          <button onClick={handleSubmit} className="user-button">
            search
          </button>
        </form>
        {searchCity ? (
          <button
            onClick={() => setCelsius(!celsius)}
            disabled={error ? true : false}
            className="user-button "
          >
            {celsius ? "convert to fahrenheit" : "convert to celsius"}
          </button>
        ) : (
          ""
        )}
      </div>
      {error && error?.response?.data.error.code ? (
        <p className="error">please provide valid input</p>
      ) : (
        <p className="error">{error?.message}</p>
      )}
      {error
        ? ""
        : inputError && <p className="error"> value must not be empty </p>}
    </div>
  );
};

export default UserInput;
