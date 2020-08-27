import React, { FC, useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import cn from "classnames";
import css from "../style.css";
import { grammarList } from "./data.tsx";
import GrammarDetail from "./Detail";
import { Ul, Page } from ".././elements";

interface ListProps {
    list: any;
    pageUploading: boolean;
}

const Presenter: FC<ListProps> = (props: ListProps) => {
    return (
        <Page className={cn({ uploading: props.pageUploading })}>
            <Ul>
                {props.list.map((item) => (
                    <li key={item.id.toString()}>
                        <Link className={css.link} to={`/grammar/${item.id}`}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </Ul>
            <Switch>
                <Route exact path="/grammar/:id" component={GrammarDetail} />
            </Switch>
        </Page>
    );
};

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
