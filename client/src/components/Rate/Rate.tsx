import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { SvgIcon } from "@mui/material";
import { useMemo, useState } from "react";

interface Color {
  filled: string;
  unfilled: string;
}
type RatingProps = {
  count: number;
  rating: number;
  color: Color;
  onRating: (idx: number) => void;
};
const Rate = ({ count, rating, color, onRating }: RatingProps) => {
  const [hoverRating, setHoverRating] = useState<number>(0);

  const getColor = (index: number) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }
    return color.unfilled;
  };
  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <SvgIcon
          key={idx}
          component={StarOutlineIcon}
          style={{ color: getColor(idx), fontSize: 22, letterSpacing: 0 }}
          onClick={() => onRating(idx)}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);

  return <div className="mb-2">{starRating}</div>;
};

export default Rate;
