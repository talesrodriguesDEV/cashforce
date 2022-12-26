'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderPortion extends Model {
    static associate(_models) { }
  }

  OrderPortion.init({
    nDup: DataTypes.STRING,
    dVenc: DataTypes.STRING,
    vDup: DataTypes.STRING,
    availableToMarket: DataTypes.TINYINT,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderPortion',
    tableName: 'orderportions'
  });

  return OrderPortion;
};
