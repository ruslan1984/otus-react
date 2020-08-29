import React, { FC, useState, useEffect, useCallback } from "react";
import { login } from "@auth/data.tsx";
import Presenter from "./Presenter";
import { Redirect } from "react-router-dom";

const AuthPage: FC = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [clicked, setClicked] = useState(false);

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setClicked(true);
        if (await login(name, password)) {
            setRedirect(true);
        } else {
            alert("Не верные логин или пароль");
        }
        setClicked(false);
    };

    useEffect(() => {}, []);

    if (redirect) {
        return <Redirect to="/admin" />;
    }
    return (
        <Presenter
            changeName={(ev: React.FormEvent) =>
                setName((ev.target as HTMLInputElement).value)
            }
            changePassword={(ev: React.FormEvent) =>
                setPassword((ev.target as HTMLInputElement).value)
            }
            submit={submit}
            btnClicked={clicked}
        />
    );
};

export default AuthPage;
