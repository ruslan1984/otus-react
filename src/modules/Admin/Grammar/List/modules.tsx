import { ISagaModule } from "redux-dynamic-modules-saga";

import { reducer } from "./reducer";
import { grammarListSaga } from "./saga";

export const getGrammarListModule = (): ISagaModule<typeof reducer> => ({
  id: "grammarList",
  reducerMap: {
    login: reducer,
  },
  sagas: [grammarListSaga],
});
