type auth = {
  user: string;
  password: string;
  authorized: boolean;
};

export enum CheckState {
  initiated,
  succeed,
  failed,
}
