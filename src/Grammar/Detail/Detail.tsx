import React, { FC, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { grammarDetail, updateDetail } from "@grammar/data.tsx";
import Presenter from "./Presenter";

interface DetailProps {
    id: number;
    pageUploading: boolean;
    submitUploading: boolean;
    name: string;
    text: string;
    change: any;
    submit: any;
}

const Detail: FC = () => {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [submitUploading, setSubmitUploading] = useState(false);
    const [pageUploading, setPageUploading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const data = grammarDetail(id);
        setPageUploading(true);
        data.then(
            (result: any) => {
                setName(result.name);
                setText(result.text);
                setPageUploading(false);
            },
            (error: any) => {
                console.error("Rejected: " + error);
            }
        );
    }, []);

    const change = useCallback((ev: React.ChangeEvent) => {
        const name = (ev.target as HTMLInputElement).name;
        const value = (ev.target as HTMLInputElement).value;
        switch (name) {
            case "name": {
                setName(value);
                break;
            }
            case "text": {
                setText(value);
                break;
            }
        }
    }, []);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = {
            name: name,
            text: text,
        };
        setSubmitUploading(true);
        updateDetail(id, data).then(
            (result) => {
                result && setSubmitUploading(false);
            },
            (error) => {
                console.error("Rejected: " + error);
            }
        );
    };
    return (
        <Presenter
            id={id}
            pageUploading={pageUploading}
            name={name}
            text={text}
            change={change}
            submit={submit}
            submitUploading={submitUploading}
        />
    );
};

export default Detail;
