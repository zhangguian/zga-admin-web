export *  from "./ui/index.ts"


export const check = (item: string, resourcePool: string[]) => {
  return resourcePool.some((p) => p === item);
};
export const checkAny = (items: string[], resourcePool: string[]) => items.some((item) => check(item, resourcePool));
