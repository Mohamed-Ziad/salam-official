"use client";
import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function AuthPage() {

  const [isRegister, setIsRegister] = useState(false);


  return <>
    <div className="container">
      <div className={`form-container ${isRegister ? "right-panel-active" : ""} `} id="main">
        <div className="sign-up">
          <form action="#">
            <h2> create account </h2>
            <div className="social-container">
              <button type="button" className="facebook"><FaFacebook /></button>
              <button type="button" className="google"><FaGoogle /></button>
            </div>
            <p>or use your email for registeration</p>
            <input type="username" placeholder="username" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="confirm password" />
            <button type="button" className="btn-submit">sign up</button>
          </form>
        </div>

        <div className="sign-in">
          <form action="#">
            <h2> sign in </h2>
            <div className="social-container">
              <button type="button" className="facebook"><FaFacebook /></button>
              <button type="button" className="google"><FaGoogle /></button>
            </div>
            <p>or use your account</p>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <a>forget your password</a>
            <button type="button" className="btn-submit">sign in</button>

          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-left">
              <img src="/logo.png" width={120} className="rounded-pill mb-3" />
              <h2>welcome back</h2>
              <p>to keep connected with us please login with your personal info.</p>
              <button type="button" id="sign-in" onClick={() => setIsRegister(false)}> sign in</button>
            </div>
            <div className="overlay-right">
              <img src='/logo.png' width={120} className="rounded-pill mb-3" />
              {/* <Image src='/logo.png' alt="" width={100} height={100} /> */}
              <h2>hello, friend</h2>
              <p>enter your personal details and start journey with us.</p>
              <button type="button" id="sign-up" onClick={() => setIsRegister(true)}> sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}