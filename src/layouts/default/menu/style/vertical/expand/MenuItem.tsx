import type {MenuItemProps} from "@/layouts/default/menu/types.ts";
import {menuItemClasses, menuItemStyles} from "@/layouts/default/menu/style/css.ts";
import Icon from "@/components/icon";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/ui/Tooltip.tsx";
import {cn} from "@/utils";
import {MenuItemRenderer} from "@/layouts/default/menu/widgets/menu-item-render.tsx";

export function MenuItem(item: MenuItemProps) {
  const { title, icon, info, caption, open, active, disabled, depth, hasChild } = item;

  const content = (
    <>
    <span style={menuItemStyles.icon}  className="mr-3 items-center justify-center">
				{icon && typeof icon === "string" ? <Icon icon={icon} /> : icon}
    </span>
      <span style={menuItemStyles.texts} className="min-h-[24px]">
				{/* Title */}
        <span style={menuItemStyles.title}>{title}</span>

        {/* Caption */}
        {caption && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span style={menuItemStyles.caption}>{caption}</span>
              </TooltipTrigger>
              <TooltipContent side="top" align="start">
                {caption}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
			</span>
      {info && <span style={menuItemStyles.info}>{info}</span>}
      {hasChild && (
        <Icon
          icon="eva:arrow-ios-forward-fill"
          style={{
            ...menuItemStyles.arrow,
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
          }}
        />
      )}
    </>
  )

  const itemClassName = cn(
    menuItemClasses.base,
    menuItemClasses.hover,
    "min-h-[44px]",
    active && depth === 1 && menuItemClasses.active,
    active && depth !== 1 && "bg-action-hover!",
    disabled && menuItemClasses.disabled,
  );

  return (
    <MenuItemRenderer item={item} className={itemClassName}>
      {content}
    </MenuItemRenderer>
  );
}