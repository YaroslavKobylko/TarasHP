import React, { useState, useEffect } from 'react';
import './Reviews.css';
import First from "./msg795295778-225764.jpg";
import Second from "./msg795295778-225768.jpg";
import Third from "./msg795295778-225770.jpg";

const Reviews = () => {
  const photos = [
    First,
    Second,
    Third,

    // Додайте інші URL-адреси фотографій за потреби
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000); // Інтервал зміни фотографії кожні 5 секунд

    return () => clearInterval(intervalId);
  }, [currentPhotoIndex, photos.length]);

  return (
    <div className="reviews-container" id="reviews">
      <h1 className="reviews-heading">Відгуки</h1>
      <div className="pic-ctn">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`photo-${index}`}
            className={`pic ${index === currentPhotoIndex ? 'active' : 'hidden'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;