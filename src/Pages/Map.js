
import React from "react";

const Map = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Map of Chandigarh</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.002132417736!2d76.7794!3d30.7333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f95102853b863%3A0xa39755b67d5bb495!2sChandigarh!5e0!3m2!1sen!2sin!4v1677479071230!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        title="Chandigarh Map"
      ></iframe>
    </div>
  );
};

export default Map;
