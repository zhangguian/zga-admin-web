import { lazy, type LazyExoticComponent, type ReactNode, type ComponentType } from "react";

// 定义 import.meta.glob 返回的模块加载函数类型
type ModuleLoader = () => Promise<{
  default: ComponentType<unknown>;
}>;

// 定义懒加载组件缓存的类型
type LazyComponentCache = Map<string, LazyExoticComponent<ComponentType<unknown>>>;

// 使用 import.meta.glob 并明确类型
const Pages: Record<string, ModuleLoader> = import.meta.glob(
  "/src/pages/**/*.tsx",
  { eager: false }
) as Record<string, ModuleLoader>;

// 初始化组件缓存
const lazyComponentCache: LazyComponentCache = new Map();

/**
 * 动态加载页面组件的工具函数
 * @param path 组件路径，相对于 /src/pages 目录
 * @param props 传递给组件的属性
 * @returns 加载的组件或 null（如果加载失败）
 */
export const Component = <P extends Record<string, unknown> = Record<string, unknown>>(
  path: string = "",
  props?: P
): ReactNode => {
  if (!path) return null;

  // 尝试匹配不同的文件路径模式
  const componentPath1 = `/src${path}.tsx`;
  const componentPath2 = `/src${path}/index.tsx`;
  
  const importFn = Pages[componentPath1] || Pages[componentPath2];
  
  if (!importFn) {
    console.warn(`Component not found for path: ${path}, tried: ${componentPath1} and ${componentPath2}`);
    return null;
  }

  // 从缓存获取组件，没有则创建新的懒加载组件
  let Element = lazyComponentCache.get(path);
  
  if (!Element) {
    Element = lazy(() => importFn());
    lazyComponentCache.set(path, Element);
  }
  
  return <Element {...props} />;
};
