export const debounce = <T extends (...args: any[]) => void>(func: T, ms: number): T => {
  let id: number | undefined = undefined;
  const debounced = (...args: Parameters<T>) => {
    window.clearTimeout(id);
    id = window.setTimeout(() => {
      func.apply(null, args);
    }, ms);
  };
  return debounced as T;
}