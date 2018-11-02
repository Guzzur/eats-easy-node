import React from "react";
import UnderConstruction from "react-under-construction";
import "react-under-construction/build/css/index.css";

const App = () => (
  <UnderConstruction
    background={{
      image: "https://static.pexels.com/photos/259698/pexels-photo-259698.jpeg",
      textColor: "#fff",
      overlay: {
        color: "#000",
        opacity: ".5"
      }
    }}
    title={{
      text: "EatsEasy"
    }}
    description={{
      text: "Our website is under construction. We'll be here soon...",
      style: {
        maxWidth: "440px"
      }
    }}
  />
);

export default App;
