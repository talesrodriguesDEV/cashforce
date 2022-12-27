'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('providers', [
      {
        name: 'CEDENTE 002',
        tradingName: 'CEDENTE 002 LTDA',
        createdAt: '2020-10-29 21:22:21',
        updatedAt: '2020-10-29 21:22:22',
        city: 'Vitória',
        state: 'ES',
        cnpjId: 2,
        email: 'cedente002@email.com'
      },
      {
        name: 'CEDENTE 003',
        tradingName: 'CEDENTE 003 LTDA',
        createdAt: '2021-04-14 16:52:34',
        updatedAt: '2021-04-14 16:52:35',
        city: 'Florianópolis',
        state: 'SC',
        cnpjId: 3,
        email: 'cedente003@email.com'
      },
      {
        name: 'CEDENTE 004',
        tradingName: 'CEDENTE 004 LTDA',
        createdAt: '2022-12-27 15:40:00',
        updatedAt: '2022-12-27 15:40:01',
        city: 'São Paulo',
        state: 'SP',
        cnpjId: 4,
        email: 'cedente004@email.com'
      }
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('providers', null, {});
  }
};
