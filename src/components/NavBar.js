import React from "react"
import user from "../assets/user.png"
import download from "../assets/download.png"
import slogo from "../assets/slogo.png"

const NavBar = () => (
  <nav className="nav d-flex flex-column align-items-center justify-content-center">
    <div className="nav__container container">
      <div className="nav__row row align-items-center no-gutters">
        <div className="nav__logo col-6">
          <img src={slogo} className="img-fluid" />
        </div>
        <div className="nav__buttons col-6">
          <div className="nav__item-one">
            <img src={download} className="nav__img-one" />
            <span className="nav__text">Download</span>
          </div>
          <div className="nav__item-two">
            <img src={user} className="nav__img-two" />
            <span className="nav__text">Login/Signup</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar
