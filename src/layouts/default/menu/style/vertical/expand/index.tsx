import type {MenuProps} from "@/layouts/default/menu/types.ts";
import {cn} from "@/utils";
import {MenuGroup} from "@/layouts/default/menu/style/vertical/expand/MenuGroup.tsx";

export default function VExpandMenu({data, className, ...props}: MenuProps) {
  return (
    <nav className={cn("flex w-full flex-col gap-1", className)} {...props}>
      {
        data.map((group, index) => (
          <MenuGroup key={group.title || index} title={group.title} items={group.items} />
        ))
      }
    </nav>
  )
}