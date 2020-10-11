import {
  Input,
  Name,
  Label,
  Button,
  Page,
} from "@components/Elements/elements.tsx";
import React, { FC, FormEventHandler } from "react";
import { CheckState } from "@auth/types";

interface AuthProps {
  submit: FormEventHandler;
  changeUser: FormEventHandler;
  changePassword: FormEventHandler;
  user: string;
  password: string;
  status: CheckState;
}
const AuthPagePresenter: FC<AuthProps> = (props: AuthProps) => {
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
        <Button status={props.status}>Вход</Button>
        {(() => {
          if (props.status === CheckState.failed) {
            return "Ошибка авторизации";
          }
        })()}
      </form>
    </Page>
  );
};

export default AuthPagePresenter;
