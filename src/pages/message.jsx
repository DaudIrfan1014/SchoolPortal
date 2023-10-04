import React, { useEffect, useState } from "react";
import "./pages.css";
import SideBar from "../components/sideBar";
import axios from "axios";
const Message = () => {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/comments")
      .then((res) => {
        console.log(res.data);
        setMessage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <section className="layout">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="body">
          <div className="cont">
            <div className="title">
              <h1>Comments and Suggestions</h1>
            </div>
            <div className="mess">
              {message.map((m, index) => {
                return (
                  <>
                    <div className="text" key={index}>
                      <h1>{m.name}</h1>
                    </div>
                    <div class="container">
                      <div class="dialogbox">
                        <div class="body">
                          <span class="tip tip-up"></span>
                          <div class="message">
                            <span>
                              <p>{m.comments}</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Message;
