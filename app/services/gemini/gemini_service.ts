import env from '#start/env'
import fs from 'node:fs'
import { GoogleAIFileManager } from '@google/generative-ai/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

export default class GeminiService {
  async uploadAndGenerateContent(image: string) {
    console.log(image)
    const imageTest =
      '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'
    const fileManager = new GoogleAIFileManager(env.get('GEMINI_API_KEY'))
    const genAI = new GoogleGenerativeAI(env.get('GEMINI_API_KEY'))

    try {
      // Obtém o modelo de geração
      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-pro',
      })

      // Upload do arquivo
      const uploadResponse = await fileManager.uploadFile(image, {
        mimeType: 'image/jpeg', // Ajuste o MIME type conforme necessário
        displayName: 'WaterOrGasImage',
      })

      console.log(`Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`)

      // Processa a imagem base64
      const base64Data = imageTest.replace(/^data:image\/(jpeg|png);base64,/, '')
      const buffer = Buffer.from(base64Data, 'base64')

      // Salva o arquivo temporário
      const tempFilePath = '/tmp/temp-image.jpg' // Ajuste o caminho conforme necessário
      fs.writeFileSync(tempFilePath, buffer)

      // Gera o conteúdo
      const result = await model.generateContent([
        {
          fileData: {
            mimeType: uploadResponse.file.mimeType,
            fileUri: uploadResponse.file.uri,
          },
        },
        { text: 'Describe how this product might be manufactured.' },
      ])

      return result.response.text()
    } catch (error) {
      console.error('Error during the process:', error)
    }
  }
}
