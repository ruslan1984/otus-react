import { Input, Textarea, Name, Label, Button, Page } from "@/elements";
import React, { FC } from "react";
import cn from "classnames";

interface DetailProps {
    id: number;
    pageUploading: boolean;
    submitUploading: boolean;
    name: string;
    text: string;
    change: any;
    submit: any;
}

const Presenter: FC<DetailProps> = (props: DetailProps) => {
    return (
        <Page className={cn({ uploading: props.pageUploading })}>
            ID {props.id}
            <hr />
            <form action="" onSubmit={props.submit}>
                <Label htmlFor="">
                    <Name>Название</Name>
                    <Input
                        onChange={props.change}
                        name="name"
                        type="text"
                        value={props.name}
                    />
                </Label>
                <Label htmlFor="">
                    <Name>Текст</Name>
                    <Textarea
                        defaultValue={props.text}
                        onChange={props.change}
                        name="text"
                        id="text"
                        cols="30"
                        rows="10"
                    />
                </Label>
                <Button className={cn({ updating: props.submitUploading })}>
                    Сохранить
                </Button>
            </form>
        </Page>
    );
};

export default Presenter;
