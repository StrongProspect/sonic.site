export function isEnumValue<T extends { [s: string]: unknown }>(
  theEnum: T,
  value: unknown
): value is T[keyof T] {
  return Object.values(theEnum).includes(value);
}
