'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    static associate(_models) { }
  }

  Offer.init({
    tax: DataTypes.STRING,
    tariff: DataTypes.STRING,
    adValorem: DataTypes.STRING,
    float: DataTypes.STRING,
    iof: DataTypes.STRING,
    expiresIn: DataTypes.DATE,
    paymentStatusSponsor: DataTypes.TINYINT,
    paymentStatusProvider: DataTypes.TINYINT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    orderId: DataTypes.INTEGER,
    sponsorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Offer',
    tableName: 'offers'
  });

  return Offer;
};
