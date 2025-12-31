import type {MenuItemProps} from "@/layouts/default/menu/types.ts";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/ui/Tooltip.tsx";
import Icon from "@/components/icon";
import {menuItemClasses, menuItemStyles} from "@/layouts/default/menu/style/css.ts";
import {cn} from "@/utils";
import {MenuItemRenderer} from "@/layouts/default/menu/widgets/menu-item-render.tsx";

export const MenuRootItem = (item: MenuItemProps) => {

  const content = (
    <>
      {
        item.caption && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Icon icon="solar:info-circle-linear" size={16} className="absolute left-1 top-2" />
              </TooltipTrigger>
              <TooltipContent side="right">{item.caption}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      }
      {/* Icon */}
      <span style={menuItemStyles.icon}>
				{item.icon && typeof item.icon === "string" ? <Icon icon={item.icon} /> : item.icon}
			</span>

      {/* Arrow */}
      {item.hasChild && (
        <Icon icon="eva:arrow-ios-forward-fill" className="absolute right-1 top-2" style={menuItemStyles.arrow} />
      )}

      {/* Title */}
      <span style={menuItemStyles.title} className="text-center! text-xs! mt-1">
				{item.title}
			</span>
    </>
  );


  const itemClassName = cn(
    menuItemClasses.base,
    menuItemClasses.hover,
    "relative flex-col min-h-12 px-1 pt-2 pb-1.5",
    item.active && item.depth === 1 && menuItemClasses.active,
    item.active && item.depth !== 1 && "bg-action-hover!",
    item.disabled && menuItemClasses.disabled,
  );

  return (
    <MenuItemRenderer item={item} className={itemClassName}>
      {content}
    </MenuItemRenderer>
  )
}