export interface SidenavItem {
  type: string;
  name: string;
  open?: boolean;
  icon?: string;
  router?: string;
  clickFn?: Function;
  children?: Array<object>;
}
