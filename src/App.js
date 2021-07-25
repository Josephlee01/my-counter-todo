import React from "react";
import MyComponents from "./Components/MyComponents";
import Say from "./Components/Say";

const App = () => {
  return (
    <div>
      <MyComponents name="Joe"> react </MyComponents>

      <Say />
    </div>
  );
};

export default App;
