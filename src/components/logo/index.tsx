import {NavLink} from "react-router";
import {cn} from "@/utils/ui/css.ts";
import Icon from "@/components/icon";

interface Props {
  size?: number | string;
  className?: string;
}
export default function Logo({size =40, className}: Props) {
  return (
    <NavLink to="/" className={cn(className)}>
      <Icon  icon="local:logo" size={size} color="var(--colors-palette-primary-default)" ></Icon>
    </NavLink>
  )
}