import fs from 'node:fs'
import ExcelJS from 'exceljs'
import app from '@adonisjs/core/services/app'
import { DateTime } from 'luxon'
import IReportColumnFormat from '../../utils/interface/report_column_format.js'
import IReportCustomRowOptions from '../../utils/interface/report_custom_row_options.js'

export default class ExcelService {
  private worksheet: ExcelJS.Worksheet
  private logoImg: number
  private now: DateTime
  private reportName: string

  constructor(worksheetName: string) {
    if (!fs.existsSync(app.tmpPath())) {
      fs.mkdirSync(app.tmpPath())
    }
    const workbook = new ExcelJS.Workbook()
    this.worksheet = workbook.addWorksheet(worksheetName, { views: [{ showGridLines: false }] })
    this.logoImg = workbook.addImage({
      filename: 'resources/pdf/images/recycle_din_logo.jpeg',
      extension: 'jpeg',
    })
    this.now = DateTime.now()
    this.reportName = worksheetName + ' ' + this.now.toFormat('dd-MM-yyyy HH:mm')
  }

  formatColumns(columnsFormat: IReportColumnFormat[]): void {
    this.worksheet.columns = columnsFormat
  }

  addVoidRow(): void {
    this.worksheet.addRow(['']).commit()
  }

  mergeCells(merges: string[]): void {
    for (const merge of merges) {
      this.worksheet.mergeCellsWithoutStyle(merge)
    }
  }

  addHeaderRow(headerTitle: string, rowData?: string[]): void {
    const emissionText = 'Data de emissão: ' + this.now.toFormat('dd-MM-yyyy')
    const row = rowData ?? ['', headerTitle, emissionText]
    this.worksheet.getRow(this.worksheet.actualRowCount).values = row
    this.worksheet.addImage(this.logoImg, 'A1:A1')
    const headerRow = this.worksheet.getRow(this.worksheet.actualRowCount)

    headerRow.font = {
      name: 'Arial',
      color: { argb: '38761d' },
      family: 2,
      size: 14,
    }

    headerRow.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'ffffff' },
    }

    headerRow.height = 50
    headerRow.alignment = { vertical: 'middle', horizontal: 'center' }
  }

  addTitleRow(columnsTitles: string[], height?: number): void {
    this.worksheet.addRow(columnsTitles).commit()
    const titleRow = this.worksheet.getRow(this.worksheet.actualRowCount)

    titleRow.font = {
      name: 'Arial',
      color: { argb: 'FFFFFF' },
      family: 2,
      size: 12,
    }

    titleRow.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: '38761d' },
    }

    titleRow.height = height ?? 20
    titleRow.alignment = { vertical: 'middle', horizontal: 'center' }
  }

  addDefaultRow(rowData: string[]): void {
    this.worksheet.addRow(rowData).commit()

    const backgroundColor = this.getColorForDefaultRow()
    const currentRow = this.worksheet.getRow(this.worksheet.actualRowCount)

    currentRow.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: backgroundColor },
    }

    currentRow.font = { name: 'Arial', size: 11 }
    currentRow.alignment = { vertical: 'middle', horizontal: 'center' }
    currentRow.height = 18
  }

  addCustomRow(rowData: string[], customRowOptions: IReportCustomRowOptions): void {
    const { backgroundColor, fontSize, height, alignment, color } = customRowOptions
    this.worksheet.addRow(rowData).commit()

    const currentRow = this.worksheet.getRow(this.worksheet.actualRowCount)

    currentRow.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: backgroundColor },
    }

    currentRow.font = { name: 'Arial', size: fontSize ?? 11, color: { argb: color ?? '000000' } }
    currentRow.alignment = alignment ?? { vertical: 'middle', horizontal: 'center' }
    currentRow.height = height ?? 18
  }

  async writeInFile(): Promise<string> {
    await this.worksheet.workbook.xlsx.writeFile(app.tmpPath(this.reportName))
    return this.reportName
  }

  private getColorForDefaultRow(): string {
    return this.worksheet.actualRowCount % 2 ? 'efefef' : 'FFFFFF'
  }
}
