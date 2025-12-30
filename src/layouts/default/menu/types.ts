export type MenuItemOptionsProps = {
  depth?: number;
  hasChild?: boolean;
};

export type MenuItemStateProps = {
  open?: boolean;
  active?: boolean;
  disabled?: boolean;
  hidden?: boolean;
};


export type MenuItemDataProps = {
  path: string;
  title: string;
  icon?: string | React.ReactNode;
  info?: React.ReactNode;
  caption?: string;
  auth?: string[];
  children?: MenuItemDataProps[];
} & MenuItemStateProps;

export type MenuItemProps = React.ComponentProps<"div"> & MenuItemDataProps & MenuItemOptionsProps;


export type MenuListProps = Pick<MenuItemProps, "depth"> & {
  data: MenuItemDataProps;
  authenticate?: (auth?: MenuItemProps["auth"]) => boolean;
};

export type MenuGroupProps = Omit<MenuListProps, "data" | "depth"> & {
  title?: string;
  items: MenuItemDataProps[];
};

export type MenuProps = React.ComponentProps<"nav"> &
  Omit<MenuListProps, "data" | "depth"> & {
  data: {
    title?: string;
    items: MenuItemDataProps[];
  }[];
};
