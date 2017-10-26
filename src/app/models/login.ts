export interface LoginForm {
  username: string;
  password: string;
}

export interface LoginFormState {
  text: string;
  loading: boolean;
  success: boolean;
  btnText?: string;
}

export interface LoginResponse {
  _id: string;
  username: string;
  realname: string;
  accessToken: string;
  role: Array<string>;
}