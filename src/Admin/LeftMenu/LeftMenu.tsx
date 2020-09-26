import React, { FC } from "react";
import { Ul, Menu, ListLink } from "@admin/elements";

const LeftMenu: FC = () => {
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

export default LeftMenu;
