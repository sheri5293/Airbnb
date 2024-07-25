import React from "react";
import ExperienceCard from "./ExperienceCard";
import "../styles/ExperienceList.css";

const experiences = [
  {
    image: "/src/assets/images/katie.jpg",
    title: "Life lessons with Katie Zaferes",
    price: 136,
    rating: 5.0,
    reviews: 6,
    status: "SOLD OUT",
    location: "USA",
  },
  {
    image: "/src/assets/images/wedding-photography.jpg",
    title: "Learn wedding photography",
    price: 125,
    rating: 5.0,
    reviews: 30,
    status: "ONLINE",
    location: "USA",
  },
  {
    image: "/src/assets/images/mountain-biking.jpg",
    title: "Group Mountain Biking",
    price: 50,
    rating: 4.8,
    reviews: 2,
    location: "USA",
  },
];

const ExperienceList = () => (
  <div className="experience-list">
    {experiences.map((exp, index) => (
      <ExperienceCard key={index} {...exp} />
    ))}
  </div>
);

export default ExperienceList;
