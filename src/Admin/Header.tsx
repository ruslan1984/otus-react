import React, { FC, useState } from "react";
import { logout } from "@auth/data.tsx";
import { Redirect } from "react-router-dom";
interface HeaderProps {
    history: any;
}

const Header: FC<HeaderProps> = (props: HeaderProps) => {
    const [redirect, setRedirect] = useState(false);
    const logoutBtn = (e: React.FormEvent) => {
        logout();
        setRedirect(true);
    };
    if (redirect) {
        return <Redirect to="/" />;
    }
    return (
        <>
            <button onClick={logoutBtn}> Выйти</button>
            <hr />
        </>
    );
};

export default Header;
