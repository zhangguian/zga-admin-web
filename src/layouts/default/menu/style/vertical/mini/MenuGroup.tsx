import type {MenuGroupProps} from "@/layouts/default/menu/types.ts";
import {MenuList} from "@/layouts/default/menu/style/vertical/mini/MenuList.tsx";

export function MenuGroup({items} : MenuGroupProps) {
  return (
    <li>
      <ul className="flex flex-col gap-1">
        {items.map((item, index) => (
          <MenuList key={item.title || index} data={item} depth={1} />
        ))}
      </ul>
    </li>
  )
}