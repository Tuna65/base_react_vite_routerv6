import React from "react";
import "./Button.scss";

type buttonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  color?: string | "primary" | "nomal" | "none";
  variant?: string | "outline";
  children?: any;
};

function Button(props: buttonProps) {
  const { onClick, children, color, variant } = props;
  return (
    <button
      onClick={onClick}
      className={`button__wrapper ${color ?? "primary"} ${variant}`}
    >
      {children}
    </button>
  );
}

export default Button;
