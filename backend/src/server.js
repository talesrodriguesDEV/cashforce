const express = require('express');
const cors = require('cors');

const PORT = 3001;

const api = express();

api.use(cors());
api.use(express.json());

const { orderService, providerService } = require('./services');

api.get('/orders', async (_req, res) => {
  const orders = await orderService.listOrders();

  res.status(200).json(orders);
});

api.get('/provider/:id', async (req, res) => {
  const { id } = req.params;

  const provider = await providerService.getProviderInfo(id);

  res.status(200).json(provider);
});

api.listen(PORT, () => console.log(`Running on port ${PORT}`));
