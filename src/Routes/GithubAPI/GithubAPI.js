import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const GithubAPI = () => {
  let [markdown, setMarkdown] = useState("# Main");

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    let baseUrl = '/';

    const data = axios({
      method: "get",
      url:
        "https://api.github.com/repos/facebook/react/contents/README.md",
    //   url:
    //     "https://raw.githubusercontent.com/vishwajeetraj11/vishwajeetraj11/master/README.md",
    });
    // data.then((v) => setMarkdown(v.data)).catch((e) => setMarkdown("# error"));
    data.then((e) => {
        baseUrl = e.data.download_url;
        const RealData = axios({
            method: "get",
          url: baseUrl,
        });
        RealData.then((v) => setMarkdown(v.data)).catch((e) => setMarkdown("# error"))
    });
  };
  return (
    <div style={{ textAlign: "left", fontSize: "20px" }}>
      <h1>Hello Main Guy!</h1>
      <ReactMarkdown plugins={[gfm]} children={markdown} />
    </div>
  );
};

export default GithubAPI;
