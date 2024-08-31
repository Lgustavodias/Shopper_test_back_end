import env from '#start/env'
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { GoogleAIFileManager } from '@google/generative-ai/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

export default class GeminiService {
  async uploadAndGenerateContent(image: string): Promise<any> {
    const fileManager = new GoogleAIFileManager(env.get('GEMINI_API_KEY'))
    const genAI = new GoogleGenerativeAI(env.get('GEMINI_API_KEY'))

    try {
      console.log('Processing image base64 data')

      // Processa a imagem base64
      const base64Data = image.replace(/^data:image\/(jpeg|png);base64,/, '')
      const buffer = Buffer.from(base64Data, 'base64')

      // Salva o arquivo temporário
      const tempDir = os.tmpdir() // Diretório temporário do sistema
      const tempFilePath = path.join(tempDir, 'temp-image.jpg')
      fs.writeFileSync(tempFilePath, buffer)

      console.log('File saved to temp path:', tempFilePath)

      // Upload do arquivo
      const uploadResponse = await fileManager.uploadFile(tempFilePath, {
        mimeType: 'image/jpeg', // Ajuste o MIME type conforme necessário
        displayName: 'WaterOrGasImage',
      })

      console.log(`Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`)

      // Obtém o modelo de geração
      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-pro',
      })

      console.log('Generating content with model')

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

      console.log('Content generated successfully')

      // Remove o arquivo temporário após o uso
      fs.unlinkSync(tempFilePath)
      const resultReturn = { result: result.response.text(), imgUrl: uploadResponse.file.uri }
      return resultReturn
    } catch (error) {
      console.error('Error during the process:', error.message)
      console.error('Stack Trace:', error.stack)
      if (error.response) {
        console.error('Response Data:', error.response.data)
      }
      throw new Error('Erro ao processar a solicitação. Verifique os logs para mais detalhes.')
    }
  }
}
