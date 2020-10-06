import React, { FC } from "react";

interface HeaderProps {
  logout: () => void;
}

export const HeaderPresenter: FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <>
      <button onClick={props.logout}> Выйти</button>
      <hr />
    </>
  );
};
export default HeaderPresenter;
