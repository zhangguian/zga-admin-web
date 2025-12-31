import type {MenuItemProps} from "@/layouts/default/menu/types.ts";
import {Link} from "react-router";

type MenuItemRendererProps = {
  item: MenuItemProps;
  className?: string;
  children?: React.ReactNode;
}

export const MenuItemRenderer: React.FC<MenuItemRendererProps> = (
  {item,className, children}: MenuItemRendererProps) => {
  const { disabled, hasChild, path, onClick } = item;
  if (disabled) {
    return (<div className={className}>{children}</div>)
  }

  if (hasChild) {
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <Link to={path} className={className}>
      {children}
    </Link>
  )
}
