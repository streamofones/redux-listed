import React from "react";

// images
import upvote from '../images/upvote.png';
import downvote from '../images/downvote.png';

const ListItem = ({ itemInfo, updateScore }) => {
  return (
    <li className="list__item">
      {itemInfo.item}
      <div className="item__scoreCard">
        <span className="scoreCard__score">{itemInfo.score}</span>
        <button onClick={() => updateScore(itemInfo._id, itemInfo.score, 1)}>
          <img src={upvote} alt="thumbs up" />
          Upvote
        </button>
        <button onClick={() => updateScore(itemInfo._id, itemInfo.score, -1)}>
          <img src={downvote} alt="thumbs down" />Downvote
        </button>
      </div>
    </li>
  );
};

export default ListItem;
