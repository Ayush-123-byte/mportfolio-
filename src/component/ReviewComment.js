import React, { useEffect, useState } from "react";
import CommentReviewCard from "../layout/CommentReviewCard";

const ReviewComment = (props) => {
  const initialData = [];
  const [data, setData] = useState(initialData);
  const getComment = async () => {
    const response = await fetch("http://localhost:5000/api/auth/comments", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setData(json.comment);
    // console.log("data", data);
    console.log("my json",json.comment);
    if (json.success) {
      props.showAlert(" comment has fetch successfully  ", "success");
    } else {
      props.showAlert(" Not able to fetch Comment ", "danger");
    }
  };

  useEffect(() => {
    getComment();
    // eslint-disable-next-line
  }, []);
  return (
    <div className=" grid grid-cols-3 gap-5 p-10">
      {data.map((ele) => {
        return <CommentReviewCard name={ele.name} comment={ele.comment} />;
      })}
    </div>
  );
};

export default ReviewComment;
