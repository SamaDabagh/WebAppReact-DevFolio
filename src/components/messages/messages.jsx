import React, { useState } from "react";
import axios from "axios";
import Pagination from "../pagination/Pagination";
const Messages = () => {
  const [messages, setMessages] = useState([{}]);
  const getMessages = async () => {
    try {
      const response = await axios.get(
        `https://web-server-test-mz1w.onrender.com/getall-message`
      );
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div>
      <div className="feature-box">
        <ul className="massage-box">
          <h3>Received Messages</h3>
          {messages.map((message, index) => (
            <li key={index} className="massage-sub-box">
              <p>{message.fullName}</p>
              <p>{message.email}</p>
              {/* <p> {message.phoneNumber}</p> */}
              <p> {message.message}</p>
            </li>
          ))}
        </ul>
        <div>
          <Pagination data={getMessages} />
        </div>
      </div>
      <div className="form__group msg_btn">
        <button type="submit" className="btn btn--white" onClick={getMessages}>
          Show All Review Massages
        </button>
      </div>
    </div>
  );
};

export default Messages;
