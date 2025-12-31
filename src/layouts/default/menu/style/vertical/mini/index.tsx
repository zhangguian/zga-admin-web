import type {MenuProps} from "@/layouts/default/menu/types.ts";
import {cn} from "@/utils";
import {MenuGroup} from "@/layouts/default/menu/style/vertical/mini/MenuGroup.tsx";

export default function VMiniMenu({data, className, ...props}: MenuProps) {
  return (
    <nav className={cn("flex flex-col", className)} {...props}>
      <ul className="flex flex-col gap-1">
        {
          data.map((item, index) => (
            <MenuGroup key={item.title || index} items={item.items}></MenuGroup>
          ))
        }
      </ul>
    </nav>
  )
}
