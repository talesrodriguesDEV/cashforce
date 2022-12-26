const { Provider } = require('../models')

const getProviderInfo = async (id) => Provider.findOne({ where: { id } });

module.exports = {
  getProviderInfo,
};
