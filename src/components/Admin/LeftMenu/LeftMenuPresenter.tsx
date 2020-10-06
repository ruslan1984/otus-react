import React, { FC } from "react";
import { Ul, Menu, ListLink } from "@components/Elements/elements";

const LeftMenuPresenter: FC = () => {
  return (
    <Menu>
      <Ul>
        <li>
          <ListLink to="/admin/grammar">Грамматика</ListLink>
        </li>
        <li>
          <ListLink to="/admin/orphography">Орфография</ListLink>
        </li>
      </Ul>
    </Menu>
  );
};

export default LeftMenuPresenter;
