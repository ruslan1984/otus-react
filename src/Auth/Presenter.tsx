import { Input, Name, Label, Button, Page } from "@admin/elements";
import React, { FC } from "react";
import cn from "classnames";

interface AuthProps {
    submit: React.FormEventHandler;
    changeUser: React.FormEventHandler;
    changePassword: React.FormEventHandler;
    user: string;
    password: string;
    loading: boolean;
}
const Presenter: FC<AuthProps> = (props: AuthProps) => {
    return (
        <Page>
            <h1>Авторизация</h1>
            <form action="" onSubmit={props.submit}>
                <Label>
                    <Name>Логин</Name>
                    <Input
                        onChange={props.changeUser}
                        type="text"
                        name="name"
                        placeholder="root"
                        value={props.user}
                    />
                </Label>
                <Label>
                    <Name>Пароль</Name>
                    <Input
                        onChange={props.changePassword}
                        type="password"
                        name="password"
                        placeholder="root"
                        value={props.password}
                    />
                </Label>
                <Button className={cn({ updating: props.loading })}>
                    Вход
                </Button>
            </form>
        </Page>
    );
};

export default Presenter;
