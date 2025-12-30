import type {MenuItemDataProps} from "@/layouts/default/menu/types.ts";
import {checkAny} from "@/utils";
import {menuRuleData} from "@/layouts/default/menu/menu-data/menu-rules.tsx";
import {useMemo} from "react";

const filterItems = (items: MenuItemDataProps[], permissions: string[]) => {
  return items.filter(item => {
    const hasPermission = item.auth ? checkAny(item.auth, permissions): true;
    if (item.children?.length) {
      const filteredChildren = filterItems(item.children, permissions);
      if (filteredChildren.length === 0) {
        return false;
      }
      item.children = filteredChildren;
    }
    return hasPermission;
  })
}

const filterMenuData = (permissions: string[]) => {
  return menuRuleData.map(group => {
    const filteredIterms = filterItems(group.items,permissions);
    if (filteredIterms.length === 0) {
      return null;
    }

    return {
      ...group,
      items: filteredIterms,
    }
  }).filter((group): group is NonNullable<typeof group> => group !== null); // 过滤掉空组
}

export const useFilterMenuData = () => {
  const permissions: string[] = ["admin"];
  const permissionCodes = useMemo(() => permissions, [permissions]);
  const filteredNavData = useMemo(() => filterMenuData(permissionCodes), [permissionCodes]);
  return filteredNavData;
}