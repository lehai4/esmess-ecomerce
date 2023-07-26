import React, { ChangeEvent, FC, useCallback, useEffect, useRef } from "react";
import "./MultipleRange.scss";

interface MultiRangeSliderProps {
  step: number;
  min: number;
  max: number;
  minVal: number;
  maxVal: number;
  minValRef: any;
  maxValRef: any;
  setMinVal: (val: number) => void;
  setMaxVal: (val: number) => void;
}

const MultipleRange: FC<MultiRangeSliderProps> = ({
  step,
  min,
  max,
  minVal,
  maxVal,
  minValRef,
  maxValRef,
  setMinVal,
  setMaxVal,
}) => {
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );
  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <React.Fragment>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minVal}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxVal}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track"></div>
        <div ref={range} className="slider__range"></div>
        <div className="absolute top-4">
          <span className="text-xl">
            Price:&nbsp;&nbsp;${`${minVal} — $${maxVal}`}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MultipleRange;
