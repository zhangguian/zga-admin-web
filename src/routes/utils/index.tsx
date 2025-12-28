import {lazy} from "react";

const Pages = import.meta.glob("/src/pages/**/*.tsx",{ eager: false });
const lazyComponentCache = new Map<string, React.LazyExoticComponent<() => React.ReactNode>>();


export const Component = (path = "", props?: any): React.ReactNode => {
  if (!path) return null;

  console.log('Pages',Pages)
  console.log('path',`/src${path}/index.tsx`)
  let importFn = Pages[`/src${path}.tsx`];
  if (!importFn) importFn = Pages[`/src${path}/index.tsx`];
  console.log('Component',importFn);
  if (!importFn) {
    console.warn("Component not found for path:", path);
    return null;
  }

  let Element = lazyComponentCache.get(path);
  console.log('Element',Element)
  if (!Element) {
    Element = lazy(importFn as any);
    console.log('Element',Element)
    lazyComponentCache.set(path, Element);
  }
  console.log('Element',lazyComponentCache)
  return <Element {...props} />;
};
