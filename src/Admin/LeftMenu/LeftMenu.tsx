import React, { FC } from "react";
import { Ul, Menu, ListLink } from "@admin/elements";
import { Link } from "react-router-dom";
import css from "@admin/style.css";

const LeftMenu: FC = () => {
    return (
        <Menu>
            <Ul>
                <li>
                    <ListLink className={css.link} to="/admin/grammar">
                        Грамматика
                    </ListLink>
                </li>
                <li>
                    <ListLink className={css.link} to="/admin/orphography">
                        Орфография
                    </ListLink>
                </li>
            </Ul>
        </Menu>
    );
};

export default LeftMenu;
