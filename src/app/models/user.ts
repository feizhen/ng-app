export interface CurrentUser {
  _id: string;
  username: string;
  realname: string;
  role: Array<string>;
  accessToken: string;
  sid?: string;
  classId?: string;
  groupId?: string;
}