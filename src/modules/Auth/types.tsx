export enum CheckState {
  initiated,
  succeed,
  failed,
  loading,
  zeroData,
}
export type Login = {
  user: string;
  password: string;
};
export type Auth = {
  user: string;
  status: CheckState;
};
