import React from "react";
import gameOfThrones from "../assets/game.jpg";
import breakingBad from "../assets/breakingBad.jpg";
import prisonBreak from "../assets/prisonBreak.jpg";
const WebSeries = () => {
  return (
    <div>
      <div className="my-8">
        <p className="text-2xl">Best TV Series</p>
        <h2 className="text-5xl text-sky-700">World Best TV Series</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <div>
          <a href="#" className="group relative block bg-black">
            <img
              alt=""
              src={gameOfThrones}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-xl font-bold text-white sm:text-2xl">
                Game of Thrones
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Nine noble families fight for control over the lands of
                    Westeros, while an ancient enemy returns after being dormant
                    for millennia.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div>
          <a href="#" className="group relative block bg-black">
            <img
              alt=""
              src={breakingBad}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-xl font-bold text-white sm:text-2xl">
                Breaking Bad
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    A chemistry teacher diagnosed with inoperable lung cancer
                    turns to manufacturing and selling methamphetamine with a
                    former student to secure his family's future.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div>
          <a href="#" className="group relative block bg-black">
            <img
              alt=""
              src={prisonBreak}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-xl font-bold text-white sm:text-2xl">
                Prison Break
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    A structural engineer installs himself in a prison he helped
                    design, in order to save his falsely accused brother from a
                    death sentence by breaking themselves out from the inside.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebSeries;
