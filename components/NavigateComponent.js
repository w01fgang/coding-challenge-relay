import React from "react";
import Link from "next/link";
import { FC } from "react";

type INavigate = {
  path: string,
  text?: string,
};

const NavigateComponent: FC<INavigate> = ({ path, text }) => {
  return (
    <>
      <Link href={path}>
        <a className="links">{text}</a>
      </Link>
    </>
  );
};

export default NavigateComponent;
