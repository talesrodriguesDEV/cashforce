'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cnpj extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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