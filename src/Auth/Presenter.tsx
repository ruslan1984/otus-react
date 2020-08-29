import { Input, Name, Label, Button, Page } from "@admin/elements";
import React, { FC } from "react";
import cn from "classnames";

interface AuthProps {
    submit: React.FormEventHandler;
    changeName: React.FormEventHandler;
    changePassword: React.FormEventHandler;
    btnClicked: boolean;
}
const Presenter: FC<AuthProps> = (props: AuthProps) => {
    return (
        <Page>
            <h1>Авторизация</h1>
            <form action="" onSubmit={props.submit}>
                <Label>
                    <Name>Логин</Name>
                    <Input
                        onChange={props.changeName}
                        type="text"
                        name="name"
                        placeholder="admin"
                    />
                </Label>
                <Label>
                    <Name>Пароль</Name>
                    <Input
                        onChange={props.changePassword}
                        type="password"
                        name="password"
                        placeholder="123"
                    />
                </Label>
                <Button className={cn({ updating: props.btnClicked })}>
                    Вход
                </Button>
            </form>
        </Page>
    );
};

export default Presenter;
