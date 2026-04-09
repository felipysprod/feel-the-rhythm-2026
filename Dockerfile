# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app

# Copia apenas o package.json conforme solicitado
COPY package.json ./

# Instalação das dependências
RUN npm install

# Copia o restante dos arquivos e gera o build
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

# Copia os arquivos estáticos do build
COPY --from=build /app/dist /usr/share/nginx/html

# Copia a configuração customizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 3000
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]