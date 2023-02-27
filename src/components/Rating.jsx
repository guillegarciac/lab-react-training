import React from "react";
import filedStar from '../assets/images/filedStar.png'
import emptyStar from '../assets/images/emptyStar.png'

const Rating = (props) => {
  const {children} = props;
  const rating = [];
  const roundedRating = Math.round(children);
  const style = {
    width: '30px',
    height: '30px'
  };
  
  for (let i = 0; i<=4; i++) {
    /* loops out of 4 to print 5 stars */
    rating.push(
      i < roundedRating ? 
      <img style={style} key={i} src={filedStar} alt='filled' /> : 
      <img style={style} key={i} src={emptyStar} alt='empty' />
    )
  }
  
  return (
    <div className="rating">{rating}</div>
  )
}
export default Rating;