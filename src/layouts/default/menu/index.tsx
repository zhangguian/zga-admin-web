import {MenuVertical} from "@/layouts/default/menu/style/MenuVertical.tsx";
import {useFilterMenuData} from "@/layouts/default/menu/utils.ts";
import {cn} from "@/utils";
type Props = {
  className?: string;
};

export default function Menu({ className }: Props) {
  const menuData = useFilterMenuData();
  console.log('menuData', menuData)
  return <>
    <MenuVertical data={menuData} className={cn('select-none', className)}></MenuVertical>
  </>
}