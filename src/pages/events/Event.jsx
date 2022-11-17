import React from "react";
import "./Event.css";

const Event = ({ title, description, place, time, image }) => {
  return (
    <ul>
      <li className="event-item">
        <div className="event-item-container">
          <div className="event-image">
            <img src={image} alt="meeting" />
          </div>
          <div className="content">
            <div className="event-title">
              <h3>{title}</h3>
            </div>
            <div className="event-description">
              <p>Description: {description}</p>
            </div>
            <div>
              <div className="event-time">
                <p>Time: {time}</p>
              </div>
              <div className="event-place">
                <p>Place: {place}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Event;
