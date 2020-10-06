export enum CheckState {
  initiated,
  succeed,
  failed,
  loading,
}
export type Login = {
  user: string;
  password: string;
};
export type Auth = {
  user: string;
  password: string;
  status: CheckState;
};
