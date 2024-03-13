import React from "react";

const CommentReviewCard = (props) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <div className="flex items-center">
        <div className="">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            {props.name}
          </h2>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-700"> ~{props.comment}</p>
      </div>
    </div>
  );
};

export default CommentReviewCard;
