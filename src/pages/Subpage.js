import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Subpage({ subpageContent }) {
  const navigate = useNavigate();

  return (
    <div className="subpage">
      <img
        src={`/Carousel-Images/${subpageContent.image}`}
        alt={subpageContent.alt}
      ></img>
      <div>
        <h2>{subpageContent.h2}</h2>

        <button onClick={() => navigate('/')}>Back to home</button>
      </div>
    </div>
  );
}
