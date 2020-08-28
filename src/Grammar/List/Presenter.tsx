import React, { FC } from "react";
import { Route, Link, Switch } from "react-router-dom";
import GrammarDetail from "@grammar/Detail/Detail";
import { Ul, Page } from "@/elements";
import cn from "classnames";
import css from "@/style.css";

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

export default Presenter;
