'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Order, {
        foreignKey: 'userId',
        as: 'User'
      });
    }
  }

  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    mobile: DataTypes.STRING,
    departament: DataTypes.STRING,
    verificationCode: DataTypes.STRING,
    emailChecked: DataTypes.TINYINT,
    cashforceAdm: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });

  return User;
};
