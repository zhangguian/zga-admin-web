import type { MenuProps } from "@/layouts/default/menu/types.ts";
import { useSettingActions, useSettings } from "@/store/settingStore.ts";
import { ThemeLayout_const } from "@/types/constants.ts";
import { cn } from "@/utils";
import Logo from "@/components/logo";
import { APP_CONFIG } from "@/app-config.ts";
import Icon from "@/components/icon";
import { Button } from "@/ui/Button.tsx";
import {ScrollArea} from "@/ui/ScrollArea.tsx";
import VMiniMenu from "@/layouts/default/menu/style/vertical/mini";
import VExpandMenu from "@/layouts/default/menu/style/vertical/expand";

type Props = {
  data: MenuProps["data"];
  className?: string;
};

export function MenuVertical({ data, className }: Props) {
  const settings = useSettings();
  const { themeLayout } = settings;
  const { setSettings } = useSettingActions();

  const menuWidth = themeLayout == ThemeLayout_const.Vertical
    ? "var(--layout-menu-aside-width)"
    : "var(--layout-menu-aside-width-mini)";

  const handleToggle = () => {
    setSettings({
      ...settings,
      themeLayout: themeLayout == ThemeLayout_const.Mini ? ThemeLayout_const.Vertical : ThemeLayout_const.Mini,
    });
  };

  return (
    <nav
      data-slot="menu-nav"
      className={cn("fixed inset-y-0 left-0 flex-col  h-full bg-background border-r border-dashed z-nav transition-width duration-300 ease-in-out z-10", className)}
      style={{
        width: menuWidth,
      }}
    >
      <div
        className={cn(
          "relative flex items-center py-4 px-2 h-[var(--layout-header-height)] transition-all duration-300 ease-in-out",
          {
            "px-6": themeLayout === ThemeLayout_const.Mini, // 迷你模式下移除左右内边距，实现居中
            "px-2": themeLayout !== ThemeLayout_const.Mini, // 正常模式下保留内边距
          }
        )}
      >
        <div
          className="flex items-center justify-start transition-all duration-300 ease-in-out"
          style={{
            transform: themeLayout === ThemeLayout_const.Mini ? "translateX(0)" : "translateX(0)",
            gap: themeLayout === ThemeLayout_const.Mini ? 0 : "8px", // 间距平滑过渡
          }}
        >
          <Logo />
          <span
            className="text-xl font-bold transition-all duration-300 ease-in-out overflow-hidden"
            style={{
              opacity: themeLayout === ThemeLayout_const.Mini ? 0 : 1,
              maxWidth: themeLayout === ThemeLayout_const.Mini ? 0 : "200px",
              whiteSpace: "nowrap",
              transform: themeLayout === ThemeLayout_const.Mini ? "translateX(-8px)" : "translateX(0)",
            }}
          >
            {APP_CONFIG.appName}
          </span>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={handleToggle}
          className="h-7 w-7 absolute right-0 translate-x-1/2 z-20 transition-all duration-300 ease-in-out"
        >
          {themeLayout === ThemeLayout_const.Mini
            ? <Icon icon="lucide:arrow-right-to-line" size={12} />
            : <Icon icon="lucide:arrow-left-to-line" size={12} />}
        </Button>
      </div>
      <ScrollArea className={cn("h-[calc(100vh-var(--layout-header-height))] px-2 bg-background")}>
        {
          themeLayout === ThemeLayout_const.Mini ? <VMiniMenu data={data}/> : <VExpandMenu data={data} />
        }
      </ScrollArea>
    </nav>
  );
}