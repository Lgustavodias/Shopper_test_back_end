export default function removeDuplicatesArray<Type>(list: Type[]): Type[] {
  return [...new Set(list)]
}
