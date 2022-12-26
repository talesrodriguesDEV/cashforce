'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderNfId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      orderNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      orderPath: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      orderFileName: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      orderOriginalName: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      emissionDate: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      pdfFile: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      emitedTo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nNf: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      CTE: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      value: {
        type: Sequelize.STRING,
        defaultValue: null
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
        defaultValue: null
      },
      userId: {
        type: Sequelize.INTEGER,
        defaultValue: null
      },
      buyerId: {
        type: Sequelize.INTEGER,
        defaultValue: null
      },
      providerId: {
        type: Sequelize.INTEGER,
        defaultValue: null
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: '0'
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: '0'
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      cargoPackingList: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
        defaultValue: null
      }
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
