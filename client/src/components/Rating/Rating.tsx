import { useState } from "react";
import { Rate } from "..";

const Rating = () => {
  const [rating, setRating] = useState<number>(0);

  return (
    <Rate
      rating={rating}
      onRating={(rate) => setRating(rate)}
      count={5}
      color={{
        filled: "#111111",
        unfilled: "#dcdcdc",
      }}
    />
  );
};

export default Rating;
