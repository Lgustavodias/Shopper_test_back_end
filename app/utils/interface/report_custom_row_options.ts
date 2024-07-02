export default interface ReportCustomRowOptions {
  backgroundColor?: string
  fontSize?: number
  height?: number
  alignment?: Partial<Alignment>
  color?: string
}

interface Alignment {
  horizontal: 'left' | 'center' | 'right' | 'fill' | 'justify' | 'centerContinuous' | 'distributed'
  vertical: 'top' | 'middle' | 'bottom' | 'distributed' | 'justify'
}
