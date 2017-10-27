export interface SidenavItem {
  type: string;
  name: string;
  active?: boolean;
  icon?: string;
  router?: string;
  clickFn?: Function;
  children?: Array<SidenavItem>;
}
