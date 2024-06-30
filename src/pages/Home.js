import React from "react";
import euflag from "../image/euflag.png";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div>
        <h1 class="text-center lg:text-4xl md:text-2xl lg:mt-40 mt-56 font-MontserratVariableFont">
          WELCOME TO E-VIGNETTE
        </h1>
        <hr class="w-60 h-1 mx-auto my-12 bg-gray-200 border-2 rounded-md:my-10 dark:bg-gray-700" />
        <h3 class="font-MontserratVariableFont text-justify ml-10 mr-10">
          Vignette is a form of road pricing imposed on vehicles, usually in
          addition to the compulsory road tax, based on a period of time the
          vehicle may use the road, instead of road tolls that are based on
          distance travelled. Vignettes are currently used in several European
          countries. The term originated in France in the 1950s, although
          vignettes there were not linked to motorway use and no longer exist;
          it is now used throughout Central Europe, as well as in Italy
          (vignetta). Vignettes are used in Austria, Bulgaria, the Czech
          Republic, Hungary, Moldova, Romania, Slovakia, Slovenia and
          Switzerland. In most of these countries a small, coloured sticker is
          affixed to a vehicle windscreen, but in Bulgaria, Czech Republic,
          Hungary, Romania, Slovakia and since 2021 in Slovenia these have been
          superseded by electronic vignettes. In Moldova, vignettes are required
          for the use of any road, while in Bulgaria and Romania they are
          required for the use of any road outside urban areas. In the other
          countries, vignettes are required only for the use of motorways and
          expressways.
        </h3>
        <div class=" flex flex-col items-center justify-center">
          <Link to="/BuyVignette">
            <m.button
              className="container"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              class="mx-auto bg-gradient-to-b from-blue-900 to-blue-300 bg-blue-900 text-white w-40 h-40 shadow-2xl hover:bg-white font-bold py-2 px-4 mt-3 rounded items-center"
            >
              <img src={euflag} alt="eu flag" class="w-5 ml-auto mr-auto"></img>
              Buy vignette
            </m.button>
          </Link>

          <hr class="w-60 h-1 mx-auto my-12 bg-gray-200 border-2 rounded-md:my-10 dark:bg-gray-700" />
        </div>
      </div>
    </m.div>
  );
};
export default Home;
