import React from "react";
import "./Image.scss";

type TImageProps = {
  path: string;
  width?: number;
  height: number;
  className?: string;
};

const Image = (props: TImageProps) => {
  const { path, width, height, className } = props;
  return (
    <div
      className={`image-wrap ${className}`}
      style={{ width: `100%`, height: `${height}px` }}
    >
      <div className="image" style={{ backgroundImage: `url(${path})` }}></div>
    </div>
  );
};

export default Image;
