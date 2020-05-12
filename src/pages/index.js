import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import mobile from "../assets/mobile.png"
import laptop from "../assets/laptop.png"
import bride from "../assets/bride.png"
import groom from "../assets/groom.png"
import handmobile from "../assets/handmobile.png"
import slogo from "../assets/slogo.png"
import Fb from "../assets/footer/fb.svg"
import Insta from "../assets/footer/insta.svg"
import Tweet from "../assets/footer/tweet.svg"
import saloons from "../assets/saloons.png"
import Apple from "../assets/contact/apple.svg"
import Android from "../assets/contact/android.svg"
import AppleLogo from "../assets/apple.svg"
import DroidLogo from "../assets/droid.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="header d-flex align-items-center">
      <div className="header__container container">
        <div className="header__row d-flex row justify-content-between">
          <div className="header__col d-flex flex-column align-items-start justify-content-center col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-5">
            <div className="header__title-1 d-flex ">Appointments</div>
            <div className="header__title-1 d-flex ">just a click away</div>
            <div className="space-2"></div>
            <div className="header__title-2">
              Bookryt hooks you up with your local beauty professionals
            </div>
            <div className="space-4"></div>
            <div className="btn btn-default d-flex justify-content-around">
              <a href="#" className="header__apple-logo">
                <AppleLogo />
              </a>
              <a href="#" className="header__apple-logo">
                <AppleLogo />
              </a>
              <div>Download</div>
            </div>
          </div>
          <div className="header__col-2 d-flex align-items-center col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img className="header__mobile img-fluid" src={mobile}></img>
          </div>
        </div>
      </div>
    </section>
    <section className="feature">
      <div className="feature__container container d-flex flex-column justify-content-end">
        <div className="row feature__row align-items-end no-gutters ">
          <div className="feature__heading-left d-flex flex-column align-items-start justify-content-end col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div className="feature__feature-heading">Features</div>
            <div className="feature__text-container ">
              <h2>Hassle Free</h2>
              <hr />
              <p>
                The clients don't have to go through the hassle of calling up
                for their appointments. You can see which slots are available at
                the salon.
              </p>
            </div>
            <div className="feature__text-container ">
              <h2>Instant and transparent</h2>
              <hr />
              <p>
                You have all the choices in front of you. All the beauty
                professionals offering the services you are looking for are in
                one place. You can see which slots are available at which the
                salon.
              </p>
            </div>
            <div className="space-3"></div>
          </div>

          <div className="feature__middle d-flex flex-column align-items-center justify-content-end col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="feature__heading-wrapper d-flex flex-column align-items-center justify-content-around">
              <div className="feature__heading d-flex justify-content-center">
                Features
              </div>
              <div className="feature__text-container-middle d-flex flex-column align-items-center justify-content-center">
                <h2>Its Free</h2>
                <hr />
                <p>
                  For the average public the app is completely free to use. For
                  the business wanting to get on to the platform, the app is
                  totally free to use for the first two months
                </p>
              </div>
            </div>
            <div className="feature__img d-flex justify-content-center">
              <img src={laptop} className="img-fluid" />
            </div>
          </div>
          <div className="feature__heading-right d-flex flex-column align-items-end justify-content-end col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div className="space-2"></div>
            <div className="feature__text-container ">
              <h2>A whole new clientbase</h2>
              <hr />
              <p>
                Registering with Bookryt introduces you to a new client base
                which you can target. Get new and returning clients by
                maintainging your rating.
              </p>
            </div>
            <div className="feature__text-container ">
              <h2>Best Assistant</h2>
              <hr />
              <p>
                With Bookryt you don't need any other system to manage your
                Business's day to day operations. It takes care of all your
                scheduling needs
              </p>
            </div>
            <div className="space-3"></div>
          </div>
        </div>
      </div>
    </section>
    <section className="steps d-flex align-items-center">
      <div className="steps__container container">
        <div className="space-4"></div>
        <div className="steps__card row">
          <div className="steps__card-left d-flex flex-column justify-content-center col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 px-5">
            <div className="steps__space"></div>
            <div className="steps__sub-heading ">Easy to Signup</div>
            <div className="space-3"></div>
            <div className="steps__heading ">Get Set up in 5 easy steps</div>
            <div className="space-3"></div>
            <div className="steps__text">
              Setting up your business has never been easier. With Bookryt you
              are ready to receive appointments in 5 minutes.
            </div>
          </div>
          <div className="steps__card-right d-flex justify-content-center col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <img src={handmobile} className="steps__img img-fluid " />
          </div>
        </div>
        <div className="space-4"></div>
      </div>
    </section>
    <section className="bride d-flex align-items-center">
      <div className="bride__container container">
        <div className="space-4"></div>
        <div className="space-4"></div>
        <div className="bride__card row">
          <div className="bride__card-left d-flex flex-column justify-content-center col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 px-5">
            <div className="steps__space"></div>
            <div className="steps__sub-heading ">Easy to Signup</div>
            <div className="space-3"></div>
            <div className="bride__heading ">
              Get ready for you special ocassions
            </div>
            <div className="space-3"></div>
            <div className="bride__text">
              Setting up your business has never been easier. With Bookryt you
              are ready to receive appointments in 5 minutes
            </div>
          </div>
          <div className="bride__card-right d-flex col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img src={bride} className="bride__img img-fluid " />
          </div>
        </div>
      </div>
    </section>
    <section className="groom d-flex align-items-center">
      <div className="groom__container container">
        <div className="groom__card row">
          <div className="groom__card-left d-flex flex-column justify-content-center col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 px-5">
            <div className="steps__space"></div>
            <div className="steps__sub-heading ">Easy to Signup</div>
            <div className="space-3"></div>
            <div className="groom__heading ">
              Get ready for you special ocassions
            </div>
            <div className="space-3"></div>
            <div className="groom__text">
              Setting up your business has never been easier. With Bookryt you
              are ready to receive appointments in 5 minutes
            </div>
          </div>
          <div className="groom__card-right d-flex col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img src={groom} className="bride__img img-fluid " />
          </div>
        </div>
      </div>
    </section>

    <section className="contact d-flex flex-column justify-content-center">
      <div className="contact__container container">
        <div className="row">
          <form className="contact__form d-flex flex-column align-items-center justify-content-between justify-content-center col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 px-5">
            <div className="contact__heading">Get in touch</div>
            <div className="space-1" />
            <input
              type="text"
              className="contact__input"
              placeholder="Your Name"
              required
            />
            <div className="space-1" />
            <input
              type="email"
              className="contact__input"
              placeholder="Your Email"
              required
            />
            <div className="space-1" />
            <input
              type="text"
              className="contact__input"
              placeholder="Your Phone Number"
              required
            />
            <div className="space-1" />

            <input
              type="text"
              className="contact__input"
              placeholder="Type Your Message Here"
              required
            />
            <div className="space-1" />
            <button className="contact__button btn btn-default">Send</button>
          </form>

          <div className="contact__right d-flex flex-column align-items-end justify-content-center col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 px-5">
            <div className="contact__right-container d-flex flex-column align-items-center justify-content-around">
              <div className="contact__right-heading">
                join the industry leaders
              </div>
              <div>
                <img src={saloons} className="img-fluid" />
              </div>
              <div className="contact__store-icons d-flex justify-content-around">
                <div>
                  <a href="#">
                    <Apple />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <Android />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="footer d-flex align-items-center">
      <div className="footer__container container ">
        <div className="row no-gutters">
          <div className="footer__left d-flex flex-column align-items-start justify-content-between  col-6">
            <img src={slogo} className="footer__logo img-fluid" />
            <div className="footer__text">Appointments, a click away.</div>
          </div>
          <div className="footer__right d-flex flex-column align-items-end justify-content-between col-6">
            <div className="footer__icons d-flex justify-content-between">
              <div className="footer__icon">
                {/* <a href="https://facebook.com/bookryt/"> */}
                <Fb />
                {/* </a> */}
              </div>
              <div className="footer__icon">
                {/* <a href="https://instagram.com/bookryt/"> */}
                <Insta />
                {/* </a> */}
              </div>
              <div className="footer__icon">
                {/* <a href="https://twitter.com/bookryt/"> */}
                <Tweet />
                {/* </a> */}
              </div>
            </div>
            <div className="footer__contact">contact@bookryt.com</div>
          </div>
        </div>
        <div className="space-4" />
        <div className="footer__copy--wrapper d-flex justify-content-center">
          <div className="footer__copy">
            &copy; 2020 BookrytPvt. All rights reserved
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
