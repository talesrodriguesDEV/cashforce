'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('providers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tradingName: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      cashforceTax: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      responsibleName: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      responsibleEmail: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      responsiblePosition: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      responsiblePhone: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      responsibleMobile: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      website: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      postalCode: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      address: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      number: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      complement: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      neighborhood: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      city: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      state: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      bank: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      bankAgency: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      account: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      documents: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      phoneNumber: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      situation: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      situationDate: {
        type: Sequelize.STRING,
        defaultVale: null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        defaultVale: null
      },
      email: {
        type: Sequelize.STRING,
        defaultVale: null
      }
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('providers');
  }
};
