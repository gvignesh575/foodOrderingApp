import React from "react";
import "../signup.css";
import Link from "next/link";
const SignUpPage = () => {
  return (
    <div className="wrapper bg-[#1a1a2e] text-white">
      <div className="container min-h-screen w-full p-0 m-0">
        <div className="login-container ">
          <div className="circle-one"></div>
          <div className="circle"></div>
          <div className="circle-two"></div>
          <div className="form-container ">
            <h1 className="text-center mb-4 mt-4">Sign Up</h1>
            <form action="" className="space-y-5">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Password" />
              <input type="text" placeholder="Confirm Password" />
              <div className="theme-btn-container">
                <button className="theme-btn ">Submit</button>
              </div>
            </form>
            <span className="">
              Have an Account?{" "}
              <Link href="/login" className="text-blue-600">
                Sign in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
