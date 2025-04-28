import { useState } from "react";
import "./loginPop.css";
import { assets } from "../../assets/assets";

const LoginPop = ({ setshowlogin }) => {
  const [currentstate, setcurrentstate] = useState("LogIn");
  return (
    <div className="loginPopUp">
      <form className="loginPopContainer">
        <div className="lopinName">
          <h2>{currentstate}</h2>
          <img
            onClick={() => setshowlogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="loginInputs">
          {currentstate === "LogIn" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Email: abc@gmail.com" required />
          <input type="text" placeholder="********" required />
          {currentstate === "LogIn" ? <a href="">Forgotton password</a> : <></>}
        </div>

        {currentstate === "SignUp" ? (
          <div className="policy">
            <p>I agree with all terms and conditions</p>
            <input type="checkbox" name="" id="" />
          </div>
        ) : (
          <></>
        )}
        <div>
          <button className="ActionBtn">
            {currentstate === "LogIn" ? "LogIn " : "Create Account"}
          </button>
        </div>
        <div className="LogInsignUp">
          {currentstate === "LogIn" ? (
            <p>
              Create New Account?
              <span
                onClick={() => setcurrentstate("SignUp")}
                className="loginSignSpan"
              >
                Click here
              </span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span
                onClick={() => setcurrentstate("LogIn")}
                className="loginSignSpan"
              >
                Login here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPop;
