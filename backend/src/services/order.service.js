const { Order, Buyer, Provider } = require('../models');

const listOrders = async () => Order.findAll({
  include: [
    {
      model: Buyer,
      attributes: ['name'],
    },
    {
      model: Provider,
      attributes: ['name'],
    }
  ],
});

module.exports = {
  listOrders,
};
