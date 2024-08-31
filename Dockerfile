# Use a imagem base do Node.js
FROM node:20

# Crie e defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de configuração e dependências
COPY package*.json ./
RUN npm install

# Copie o restante do código-fonte
COPY . .

# Exponha a porta que o AdonisJS vai usar
EXPOSE 3333

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]