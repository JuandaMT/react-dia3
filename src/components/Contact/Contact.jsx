import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();
  const initialState = {
    name: "",
    email: "",
  };
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  /* VALIDACIONES */
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    if (data.name.length + 1 < 3) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const clearState = () => {
    setData(initialState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("sending data..." + data.name + " " + data.email);
    clearState();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <>
      <div>Contact</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={handleInputChange}
          name="name"
          value={data.name}
        />

        <input
          type="email"
          placeholder="email"
          onChange={handleInputChange}
          name="email"
          value={data.email}
        />

        <button type="submit" disabled={btnDisabled}>
          Enviar
        </button>
      </form>
      {message}
    </>
  );
};
export default Contact;
