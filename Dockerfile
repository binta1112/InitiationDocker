# Utiliser l’image officielle de Node.js
FROM node:18

# Définir le dossier de travail à l’intérieur du container
WORKDIR /app

# Copier le fichier package.json et installer les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copier tout le projet dans le container
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Lancer le serveur
CMD ["node", "server.js"]
