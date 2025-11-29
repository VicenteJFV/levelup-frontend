import React from "react";

const CategoryCard = ({ name, description, onClick }) => {
  return (
    <div className="card category-card h-100" onClick={onClick} role="button">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {description && <p className="card-text text-muted">{description}</p>}
      </div>
    </div>
  );
};

export default CategoryCard;
