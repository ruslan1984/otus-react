export type GrammarList = Array<GrammarListItem>;
export type GrammarListItem = {
  id: number;
  name: string;
};
export type GrammarListType = {
  list: GrammarList;
  loading: boolean;
};
