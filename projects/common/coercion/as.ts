export function as<T>(value: any): T {
  return value() as any as T;
}
