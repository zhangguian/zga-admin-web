import type {MenuGroupProps} from "@/layouts/default/menu/types.ts";
import {useToggle} from "react-use";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/ui/Collapsible.tsx";
import {cn} from "@/utils";
import Icon from "@/components/icon";
import {MenuList} from "@/layouts/default/menu/style/vertical/expand/MenuList.tsx";

export function MenuGroup({title, items}: MenuGroupProps) {
  const [open,toggleOpen] = useToggle(true)

  return (
    <Collapsible open={open}>
      <CollapsibleTrigger asChild>
        <Group title={title} open={open} onClick={toggleOpen} />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="flex w-full flex-col gap-1">
          {items.map((item, index) => (
            <MenuList key={item.title || index} data={item} depth={1} />
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}


function Group({ title, open, onClick }: { title?: string; open: boolean; onClick: (nextValue: boolean) => void }) {
  return (
    title && (
      <div
        className={cn(
          "group w-full inline-flex items-center justify-start relative gap-2 cursor-pointer pt-4 pr-2 pb-2 pl-3 transition-all duration-300 ease-in-out",
          "hover:pl-4",
        )}
        onClick={() => onClick(!open)}
      >
        <Icon
          icon="eva:arrow-ios-forward-fill"
          className={cn("absolute left-[-4px] h-4 w-4 inline-flex shrink-0 transition-all duration-300 ease-in-out", "opacity-0 group-hover:opacity-100", {
            "rotate-90": open,
          })}
        />

        <span className={cn("text-xs font-medium transition-all duration-300 ease-in-out text-text-disabled", "hover:text-text-primary")}>{title}</span>
      </div>
    )
  );
}
