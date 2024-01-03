import React from "react";

interface CardProps {
  id: number;
  name: string;
 }
 
 const Card: React.FC<CardProps> = ({ id, name }) => {

  return (
     <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs sm:max-w-sm">
       <img
         className="h-48 w-full object-cover"
         src="https://via.placeholder.com/150"
         alt="Profile"
       />
       <div className="p-4">
         <p className="text-xl font-semibold">{name}</p>
         <p className="text-green-600">+00.0000</p>
       </div>
     </div>
  );
 };

export default Card;
