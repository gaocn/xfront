export interface NavMenuItem {
  name?: string;
  order?: number;
  icon?: string;
  path: string;
  hidden?: boolean | undefined;
  children?: Array<NavMenuItem> | undefined | null;
  noShowChildren?: boolean;
}
