'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.Cnpj);
      Order.belongsTo(models.User);
      Order.belongsTo(models.Buyer);
      Order.belongsTo(models.Provider);
    }
  }

  Order.init({
    orderNfId: DataTypes.STRING,
    orderNumber: DataTypes.STRING,
    orderPath: DataTypes.STRING,
    orderFileName: DataTypes.STRING,
    orderOriginalName: DataTypes.STRING,
    emissionDate: DataTypes.STRING,
    pdfFile: DataTypes.STRING,
    emitedTo: DataTypes.STRING,
    nNf: DataTypes.STRING,
    CTE: DataTypes.STRING,
    value: DataTypes.STRING,
    cnpjId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    buyerId: DataTypes.INTEGER,
    providerId: DataTypes.INTEGER,
    orderStatusBuyer: DataTypes.STRING,
    orderStatusProvider: DataTypes.STRING,
    deliveryReceipt: DataTypes.STRING,
    cargoPackingList: DataTypes.STRING,
    deliveryCtrc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders'
  });

  return Order;
};
