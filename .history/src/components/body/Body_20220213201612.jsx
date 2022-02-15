import React from 'react'
import "./Body.css"
import Typical from "react-typical";
const Body = () => {
  return (
    <Typical
          loop={Infinity}
          steps={[
            "A Student",
            1200,
            "Enthusiastic Dev",
            1200,
            "React Developer ",
            1200,
            "Future SDE :)",
            1200,
          ]}
          wrapper="p"
        />
  )
}

export default Body