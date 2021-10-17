import React from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({ image }) => (
  <div className="xl:w-1/4 md:w-1/2 p-2 transform transition hover:scale-105 duration-500 cursor-pointer">
    <div>
      <img className="h-42 rounded-lg w-full object-cover object-center mb-6" src={image} alt="content" />
    </div>
  </div>
);

export default Card;