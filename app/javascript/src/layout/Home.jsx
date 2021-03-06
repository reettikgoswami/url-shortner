import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";

import Header from "../compoment/Header";
import UrlList from "../compoment/UrlList";
import InputBar from "../compoment/InputBar";

import urlsApi from "apis/urls";
import Toastr from "../common/Toastr";

function Home(props) {
  const [urls, setUrls] = useState([]);

  const handleSubmit = async original_url => {
    try {
      const response = await urlsApi.createShortUrl({
        url: { original_link: original_url },
      });
      Toastr.success(response.data.notice);
      fetchUrls();
    } catch (error) {
      Toastr.error(error.response.data.errors);
    }
  };

  const fetchUrls = async () => {
    try {
      const response = await urlsApi.list();
      setUrls(response.data.urls);
    } catch (error) {
      Toastr.error(error.response.data.errors);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div className="bg-blue-100 min-h-screen">
      <Header />
      <InputBar handleSubmit={handleSubmit} />
      <UrlList urls={urls} fetchUrls={fetchUrls} />
    </div>
  );
}

export default Home;
