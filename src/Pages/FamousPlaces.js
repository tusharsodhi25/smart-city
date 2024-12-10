import React from "react";
import './FamousPlaces.css'; 

const FamousPlaces = () => {
  const places = [
    {
      name: "Sukhna Lake",
      description: "A beautiful lake for picnics and boat rides.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQIVboqyUAOrKAQ4Ir8w1uNPbC0yh1I_NJEw&s"
    },
    {
      name: "Rock Garden",
      description: "A unique garden with sculptures made from waste materials.",
      image: "https://chandigarhsafari.com/wp-content/uploads/2022/04/Rock-Garden-1.jpg",
    },
    {
      name: "Rose Garden",
      description: "A large garden with various species of roses.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqpTyyrOdXMmfYaDcYwmUh4AY408U4KaiiQ&s",
    },
    {
      name: "Sector 17 Plaza",
      description: "A popular shopping and leisure destination.",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/sector-17-chandigarh-1-attr-hero?qlt=82&ts=1727353557452",
    },
    {
      name: "Elante Mall",
      description: "A modern shopping mall with multiple entertainment options.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/81/80/07/elante-mall.jpg?w=700&h=400&s=1",
    },
    {
      name: "Capitol Complex",
      description: "UNESCO World Heritage Site known for its architecture.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Palace_of_Assembly_Chandigarh_2006.jpg/1200px-Palace_of_Assembly_Chandigarh_2006.jpg",
    },
  ];

  return (
    <div className="famous-places-container">
      <h1 className="title">Famous Places in Chandigarh</h1>
      <div className="places-list">
        {places.map((place, index) => (
          <div key={index} className="place-card">
            <img
              src={place.image}
              alt={place.name}
              className="place-image"
            />
            <h2>{place.name}</h2>
            <p>{place.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamousPlaces;




