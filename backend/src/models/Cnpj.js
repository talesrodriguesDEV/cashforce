'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cnpj extends Model {
    static associate(models) {
      Cnpj.hasMany(models.Order, {
        foreignKey: 'cnpjId',
        as: 'CNPJ'
      });
    }
  }

  Cnpj.init({
    cnpj: DataTypes.STRING,
    companyType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cnpj',
    tableName: 'cnpjs'
  });

  return Cnpj;
};
