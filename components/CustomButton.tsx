"use client";

import { MouseEventHandler } from "react";
import Image from "next/image";

type Props = {
  title: string;
  containerStyle: string;
  type?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

const CustomButton: React.FC<Props> = ({
  title,
  containerStyle,
  type = "button",
  handleClick = () => null,
}) => {
  return (
    <button
      disabled={false}
      type={type}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
