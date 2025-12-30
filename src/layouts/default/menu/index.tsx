import {MenuVertical} from "@/layouts/default/menu/style/menu-vertical.tsx";
import {useFilterMenuData} from "@/layouts/default/menu/utils.ts";
type Props = {
  className?: string;
};

export default function Menu({ className }: Props) {
  const menuData = useFilterMenuData();
  console.log('menuData', menuData)
  return <>
    <MenuVertical data={menuData}></MenuVertical>
  </>
}