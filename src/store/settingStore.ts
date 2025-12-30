import {
  type ThemeColorPresets,
  type ThemeLayout,
  type ThemeMode,
} from "@/types/constants";
import {  ThemeColorPresets_const,ThemeLayout_const,  ThemeMode_const} from "@/types/constants";
import {createJSONStorage, persist} from "zustand/middleware";
import {create} from "zustand";

export type SettingsType = {
  themeColorPresets: ThemeColorPresets;
  themeMode: ThemeMode
  themeLayout: ThemeLayout;
  themeStretch: boolean;
  breadCrumb: boolean;
  accordion: boolean;
  multiTab: boolean;
  darkSidebar: boolean;
  fontFamily: string;
  fontSize: number;
  direction: "ltr" | "rtl";
}

type SettingStore = {
  settings: SettingsType;
  actions: {
    setSettings: (settings: SettingsType) => void;
    clearSettings: () => void;
  }
}

const useSettingStore = create<SettingStore>()(
  persist(
    (set) => ({
      settings: {
        themeColorPresets: ThemeColorPresets_const.Default,
        themeMode: ThemeMode_const.Light,
        themeLayout: ThemeLayout_const.Vertical,
        themeStretch: false,
        breadCrumb: true,
        accordion: false,
        multiTab: false,
        darkSidebar: false,
        fontFamily: "Open Sans Variable",
        fontSize: 12,
        direction: "ltr",
      },
      actions: {
        setSettings: (settings) => {
          set({ settings });
        },
        clearSettings() {
          useSettingStore.persist.clearStorage();
        },
      }
    }),
    {
      name: "settings",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ 'settings': state.settings }),
    }
  )
)

export const useSettings = () => useSettingStore((state) => state.settings);
export const useSettingActions = () => useSettingStore((state) => state.actions);

