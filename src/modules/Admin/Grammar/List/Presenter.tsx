import React, { FC } from "react";
import { Ul, Page } from "@components/Elements/elements";
import { GrammarList } from "./types";

interface ListProps {
  list: GrammarList;
  loading: boolean;
}

const Presenter: FC<ListProps> = (props: ListProps) => {
  return (
    <Page loading={props.loading}>
      <Ul>
        {props.list.map((item) => (
          <li key={item.id.toString()}>{item.name}</li>
        ))}
      </Ul>
    </Page>
  );
};

export default Presenter;
