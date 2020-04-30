import React from 'react';
import Firstcomponet from "./components/Firstcomponet";
import Secondcomp from "./components/Secondcomp";

function Home() {
  return (
    <div className="App">
      <Firstcomponet
        height = "100px"
        width = "100%"
      />
      <Secondcomp/>
      
    </div>
    
    
  );
}

export default Home;