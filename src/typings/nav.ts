export interface NavMenuItem {
  name: string;
  order: number;
  icon: string;
  path: string;
  children: Array<NavMenuItem>;
}
