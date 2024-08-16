import React from "react";
import "../App.css"; // You can style the skeletons here

function SkeletonCard() {
  return (
    <div className="pizza-card skeleton">
      <div className="pizza-card-image-container skeleton-image"></div>
      <div className="card-body">
        <div className="skeleton-title"></div>
        <div className="skeleton-description"></div>
        <div className="skeleton-footer"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;
