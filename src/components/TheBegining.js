import React, { useState, useEffect } from "react";

export const TheBegining = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const onChange = event => {
      localStorage.setItem("myValueInLocalStorage", event.target.value);

      setValue(event.target.value);
    };
  }, []);

  return (
    <div>
      <h1>Hello React with local storage </h1>
      <input value={value} type='text' onChange={onChange} />
      <p>{value}</p>
    </div>
  );
};

export default TheBegining;
