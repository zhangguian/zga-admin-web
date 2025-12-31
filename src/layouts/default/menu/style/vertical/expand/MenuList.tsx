import type {MenuListProps} from "@/layouts/default/menu/types.ts";
import {useLocation} from "react-router";
import {useState} from "react";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/ui/Collapsible.tsx";
import {MenuItem} from "@/layouts/default/menu/style/vertical/expand/MenuItem.tsx";

export function MenuList({data, depth = 1}: MenuListProps) {
  const location = useLocation()
  const isActive = location.pathname.includes(data.path)
  const [open,setOpen] = useState(isActive)
  const hasChild = data.children && data.children.length > 0

  const handleClick = () => {
    if (hasChild) {
      setOpen(!open)
    }
  }

  if (data.hidden) return null;


  return (
    <Collapsible open={open} onOpenChange={setOpen} data-nav-type="list">
      <CollapsibleTrigger className="w-full">
        <MenuItem
          // data
          title={data.title}
          path={data.path}
          icon={data.icon}
          info={data.info}
          caption={data.caption}
          auth={data.auth}
          // state
          open={open}
          active={isActive}
          disabled={data.disabled}
          // options
          hasChild={hasChild}
          depth={depth}
          // event
          onClick={handleClick}
        />
      </CollapsibleTrigger>
      {hasChild && (
        <CollapsibleContent>
          <div className="ml-4 mt-1 flex flex-col gap-1">
            {data.children?.map((child) => (
              <MenuList key={child.title} data={child} depth={depth + 1} />
            ))}
          </div>
        </CollapsibleContent>
      )}
    </Collapsible>
  )
}