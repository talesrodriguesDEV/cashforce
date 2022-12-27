# Cashforce

![Cashforce](./cashforce.png)

## Inicialização

1. Clonar repositório
```
git clone git@github.com:talesrodriguesDEV/cashforce.git
cd cashforce
```

2. Inicializar Backend
```
cd backend
npm install
docker-compose up -d
docker exec -it api-container sh
npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all
```

3. Inicializar Frontend
```
cd frontend
npm install
npm run dev
```
