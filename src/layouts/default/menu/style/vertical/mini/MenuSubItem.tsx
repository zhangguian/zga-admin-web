import type {MenuItemProps} from "@/layouts/default/menu/types.ts";
import {menuItemClasses, menuItemStyles} from "@/layouts/default/menu/style/css.ts";
import Icon from "@/components/icon";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/ui/Tooltip.tsx";
import {cn} from "@/utils";
import {MenuItemRenderer} from "@/layouts/default/menu/widgets/menu-item-render.tsx";

export const MenuSubItem = (item: MenuItemProps) => {
  const content = (
      <>
      <span style={menuItemStyles.icon} className="mr-1 items-center justify-center">
				{item.icon && typeof item.icon === "string" ? <Icon icon={item.icon} /> : item.icon}
			</span>
        <span style={menuItemStyles.title} className="flex-auto">
				{item.title}
			</span>
        {item.caption && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Icon icon="solar:info-circle-linear" size={16} />
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.caption}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}

        {/* Info */}
        {item.info && <span style={menuItemStyles.info}>{item.info}</span>}

        {/* Arrow */}
        {item.hasChild && <Icon icon="eva:arrow-ios-forward-fill" style={menuItemStyles.arrow} />}
      </>
  );

  const itemClassName = cn(
    menuItemClasses.base,
    menuItemClasses.hover,
    item.active && item.depth === 1 && menuItemClasses.active,
    item.active && item.depth !== 1 && "bg-action-hover!",
    item.disabled && menuItemClasses.disabled,
  );

  return (
    <MenuItemRenderer item={item} className={itemClassName}>
      {content}
    </MenuItemRenderer>
  );
}