import React from "react";
import "../login.css";
import Link from "next/link";
const LoginPage = () => {
  return (
    <div className="wrapper bg-[#1a1a2e] text-white">
      <div className="container">
        <div className="login-container">
          <div className="circle-one"></div>
          <div className="circle"></div>
          <div className="circle-two"></div>
          <div className="form-container">
            <h1 className="text-center mb-4 mt-4">Sign In</h1>
            <form action="" className="space-y-5">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Password" />
              <a href="#" className="register-forget">
                <span className=" text-blue-600">Forgot Password?</span>
              </a>
              <div className="theme-btn-container">
                <button className="theme-btn ">Submit</button>
              </div>
            </form>
            <span className="my-10">
              Don{"'"}t have an Account?{" "}
              <Link
                href="/signup"
                prefetch={false}
                className="text-blue-600"
                replace={true}
              >
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
