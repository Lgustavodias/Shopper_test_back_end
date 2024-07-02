export default function convertToNumber(value: string | null | undefined): number {
  return value !== null && value !== undefined ? Number.parseFloat(value) : 0
}
