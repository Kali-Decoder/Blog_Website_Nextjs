import React from "react";
import Blog from "../Components/Blog";
// import Data from "../Data";
import Title from "../Components/Title";
const HomePage = () => {
  return (
    <>
    <Title
        title="Home Section"
        description="Rendering Blogs of nextjs"
        name="home"
      />
      {/* <div className="container mt-2">
          {Data.length ==0 ? null: Data.map((item)=><Blog item={item} key={item.id}/>)}
      </div> */}
    </>
  );
};

export default HomePage;
