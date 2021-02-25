import React from "react";
import Header from "../compoment/Header";
import UrlList from "../compoment/UrlList";
import InputBar from "../compoment/InputBar";
import "semantic-ui-css/semantic.min.css";

function Home(props) {
  return (
    <div className="bg-blue-100 min-h-screen">
      <Header />
      <InputBar />
      <UrlList />
    </div>
  );
}

export default Home;
