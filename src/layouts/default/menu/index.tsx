import {cn} from "@/utils/ui/css.ts";
import Logo from "@/components/logo";
import {APP_CONFIG} from "@/app-config.ts";
type Props = {
  className?: string;
};

export default function Menu({ className }: Props) {
  return <>
    <nav
         className={cn("fixed inset-y-0 left-0 flex-col h-full bg-background border-r border-dashed z-nav transition-[width] duration-300 ease-in-out", className)}
    style={{
      width: "var(--layout-menu-aside-width)"
    }}
    >
      <div
        className={cn("relative flex items-center py-4 px-2 h-[var(--layout-header-height)] ")}
      >
        <div className="flex items-center justify-center">
          <Logo></Logo>
          <span className="text-xl font-bold transition-all duration-300 ease-in-out">
            {APP_CONFIG.appName}
          </span>
        </div>
      </div>
    </nav>
  </>
}