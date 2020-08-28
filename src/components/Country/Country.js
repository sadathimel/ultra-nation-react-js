import React from "react";

const Country = (props) => {
  //   console.log(props);
  const { name, population, region, flag } = props.country;
  const flageStyle = { height: "50px" };
  const countryStyle = {
    border: "1px solid red",
    margin: "10px",
    padding: "10px",
  };
  const handleAddCountry = props.handleAddCountry;
  return (
    <div style={countryStyle}>
      <h4>This is a country:{name}</h4>
      <img style={flageStyle} src={flag} alt="" />
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
    </div>
  );
};

export default Country;
