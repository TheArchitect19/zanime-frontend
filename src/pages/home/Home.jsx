import React from "react";
import Navbar from "./components/Navbar";
import home from "./home.png";
import './home.css'


function Home() {
  return (
    <div>
      <Navbar />
      <section
        className="home"
      >
        <div className="home__container container grid">
          <div>
            <h1 className="home__title">
              Best Anime & Manga posters and 3d toys
            </h1>
            <p className="home__description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              temporibus expedita quaerat dolorum assumenda autem harum animi
              hic deleniti provident, amet recusandae ipsa obcaecati. Dolores
              dolorem aliquid accusantium magnam repellendus.
            </p>
            <a href="#" className="btn">
              Explore Here
            </a>
          </div>

          <img src={home} alt="" className="home__img" />
        </div>
      </section>
    </div>
  );
}

export default Home;
