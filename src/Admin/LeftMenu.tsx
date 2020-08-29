import React, { FC } from "react";
import { Ul, Menu } from "./elements";
import { Link } from "react-router-dom";
import css from "@admin/style.css";

const LeftMenu: FC = () => {
    return (
        <Menu>
            <Ul>
                <li>
                    <Link className={css.link} to="/admin/grammar">
                        Грамматика
                    </Link>
                </li>
                <li>
                    <Link className={css.link} to="/admin/orphography">
                        Орфография
                    </Link>
                </li>
            </Ul>
        </Menu>
    );
};

export default LeftMenu;
