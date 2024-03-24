import React from "react";
import "./category-item.styles.scss";

interface CategoryItemProps {
  category: {
    imageUrl: string;
    title: string;
  };
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>SEE MORE</p>
      </div>
    </div>
  );
};

export default CategoryItem;
