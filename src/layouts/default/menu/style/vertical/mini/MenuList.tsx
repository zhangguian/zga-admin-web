import type {MenuListProps} from "@/layouts/default/menu/types.ts";
import {useLocation} from "react-router";
import {MenuRootItem} from "@/layouts/default/menu/style/vertical/mini/MenuRootItem.tsx";
import {MenuSubItem} from "@/layouts/default/menu/style/vertical/mini/MenuSubItem.tsx";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/ui/HoverCard.tsx";

export function MenuList({data, depth = 0} : MenuListProps) {
  const hasChild = data.children && data.children?.length > 0;
  const location = useLocation();
  const isActive = location.pathname.includes(data.path);

  if (data.hidden) return null;


  const renderRootMenuItem = () => {
    return (
      <MenuRootItem
        key={data.title}
        // data
        path={data.path}
        title={data.title}
        caption={data.caption}
        info={data.info}
        icon={data.icon}
        auth={data.auth}
        // state
        disabled={data.disabled}
        active={isActive}
        // options
        hasChild={hasChild}
        depth={depth}
      />
    );
  };

  const renderSubMenuItem = () => {
    return (
      <MenuSubItem
        key={data.title}
        // data
        path={data.path}
        title={data.title}
        caption={data.caption}
        info={data.info}
        icon={data.icon}
        auth={data.auth}
        // state
        disabled={data.disabled}
        active={isActive}
        // options
        hasChild={hasChild}
        depth={depth}
      />
    );
  };
  const renderMenuItem = () => (depth === 1 ? renderRootMenuItem() : renderSubMenuItem());

  const renderRootItemWithHoverCard = () => {
    return (
      <HoverCard openDelay={100}>
        <HoverCardTrigger>{renderMenuItem()}</HoverCardTrigger>
        <HoverCardContent side="right" sideOffset={10} className="p-1">
          {data.children?.map((child) => (
            <MenuList key={child.title} data={child} depth={depth + 1} />
          ))}
        </HoverCardContent>
      </HoverCard>
    );
  };

  return <li className="list-none">{hasChild ? renderRootItemWithHoverCard() : renderMenuItem()}</li>;
}