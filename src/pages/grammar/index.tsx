import React from 'react';
import Layout from "@pages/Layout";
import { GrammarList } from "@grammar/types";
import { initializeStore } from "@store/store";
import { grammarList } from "@grammar/data";

export default  function grammar(data){
  const { list } = data.initialReduxState;
  return <Layout>
    <h3>Грамматика</h3>
    <hr/>
    <div>
      <ul>
        {
          list.map((item:GrammarList)=>{
            return <li key={item.id.toString()}>{item.name}</li>;
          })
        }
      </ul>
    </div>
  </Layout>;
}

export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;
  const gl = await grammarList();
  await dispatch({
    type: "grammarList/fetch",
    payload: gl
  });
  return { props: { initialReduxState: reduxStore.getState() } }
}