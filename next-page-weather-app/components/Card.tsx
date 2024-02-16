import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

const Card = ({ children, className }: Props) => {
  return <section className={`${className}`}>{children}</section>;
};

export default Card;
