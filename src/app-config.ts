import packageJson from "../package.json";
export type AppConfig = {
  /** Application name */
  appName: string;
  /** Application version number */
  appVersion: string;
  /** Default route path for the application */
  defaultRoute: string;
  /** Public path for static assets */
  publicPath: string;
  /** Base URL for API endpoints */
  apiBaseUrl: string;
  /** Routing mode: frontend routing or backend routing */
  routerMode: "frontend" | "backend";
};

export const APP_CONFIG: AppConfig = {
  appName: "zga Admin",
  appVersion: packageJson.version,
  defaultRoute: import.meta.env.VITE_APP_DEFAULT_ROUTE || "/workbench",
  publicPath: import.meta.env.VITE_APP_PUBLIC_PATH || "/",
  apiBaseUrl: import.meta.env.VITE_APP_API_BASE_URL || "/api",
  routerMode: import.meta.env.VITE_APP_ROUTER_MODE || "frontend",
};
