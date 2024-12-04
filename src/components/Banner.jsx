import React from "react";
import Godfather from "../assets/images (10).jpg";
import Forrest_Gump from "../assets/images (9).jpg";
import IncepTion from "../assets/images (7).jpg";
import Vivah from "../assets/Vivah_(2006_film)_poster.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={Godfather}
          className="w-full h-full object-cover"
          alt="The Godfather"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">The Godfather</h2>
            <p className="text-lg">
              A classic tale of power, loyalty, and betrayal that defines
              cinematic excellence.
            </p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={IncepTion}
          className="w-full h-full object-cover"
          alt="Inception"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Inception</h2>
            <p className="text-lg">
              A mind-bending journey through dreams and reality, directed by
              Christopher Nolan.
            </p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={Vivah} className="w-full h-full object-cover" alt="Vivah" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Vivah</h2>
            <p className="text-lg">
              A beautiful love story that celebrates the purity of relationships
              and traditions.
            </p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={Forrest_Gump}
          className="w-full h-full object-cover"
          alt="Forrest Gump"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Forrest Gump</h2>
            <p className="text-lg">
              An inspiring tale of love, perseverance, and the incredible
              journey of life.
            </p>
          </div>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
