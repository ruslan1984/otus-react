import React, { FC, useState, useEffect } from "react";
import { grammarList } from "@grammar/data.tsx";
import Presenter from "./Presenter";

const List: FC = () => {
    const [list, setList] = useState([]);
    const [pageUploading, setPageUploading] = useState(false);
    useEffect(() => {
        const data = grammarList();
        setPageUploading(true);
        data.then(
            (result: any) => {
                setList(result);
                setPageUploading(false);
            },
            (error: any) => {
                console.error("Rejected: " + error);
            }
        );
    }, []);
    return <Presenter list={list} pageUploading={pageUploading} />;
};

export default List;
