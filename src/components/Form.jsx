import React from "react";
import "../styles/Form.css";

const Form = () => {
  return (
    <div className="background">
      <div className="form-body">
        <div className="form-left">
          <img className="logo" src="/logo.png" alt="logo" />
          <h2 className="description">
            Say hello to global food and beverage producers and suppliers, all
            in one place
          </h2>
        </div>
        <form className="form">
          <h2 className="title">Let’s get started with a few simple steps</h2>
          <label className="email" htmlFor="email">
            Email<span>*</span>
          </label>
          <input className="input" type="email" id="email" />
          <label className="name" htmlFor="name">
            Full name<span>*</span>
          </label>
          <input className="input" type="text" id="name" />
          <label className="password" htmlFor="password">
            Password<span>*</span>
          </label>
          <input className="input" type="password" id="password" />
          <button className="button" type="submit">
            Sing up
          </button>
          <div className="to-bottom">
            <p className="bottom-text">
              By signing up, you agree to our <a href="#">Terms of Service.</a>
            </p>
            <p className="bottom-text">
              Already have an account? <a href="#" className="green"> Log in</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
