'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const initialColors = [
      { colorshexa: 'ee3f43' },
      { colorshexa: 'e33c6c' },
      { colorshexa: 'e33b99' },
      { colorshexa: 'f045c3' },
      { colorshexa: 'f048ef' },
      { colorshexa: 'c247ee' },
      { colorshexa: '9646ee' },
      { colorshexa: '6a46ee' },
      { colorshexa: '3f46ed' },
      { colorshexa: '3f6eee' },
      { colorshexa: '4299ef' },
      { colorshexa: '45c5ef' },
      { colorshexa: '38e0e0' },
      { colorshexa: '38deb2' },
      { colorshexa: '38de87' },
      { colorshexa: '52d471' },
      { colorshexa: '55d656' },
      { colorshexa: '75d757' },
      { colorshexa: '94d757' },
      { colorshexa: 'aaca4d' },
      { colorshexa: 'cdcb2b' },
      { colorshexa: 'fbbc2d' },
      { colorshexa: 'e97721' },
      { colorshexa: 'e24923' },
      { colorshexa: '000000' },
      { colorshexa: '666666' },
      { colorshexa: '999999' },
      { colorshexa: 'cccbcc' },
    ];

    for (let i = 1; i <= 50; i++) {
      initialColors.push({
        colorHexa: faker.internet.color(), // FF8822
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('colors', initialColors, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('colors', null, {});
  },
};
