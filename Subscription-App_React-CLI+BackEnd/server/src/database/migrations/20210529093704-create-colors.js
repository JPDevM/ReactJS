'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /* Create table */
    await queryInterface.createTable('colors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      mainColor: {
        type: Sequelize.STRING,
        allowNull: true, // MUST have a value. Set defaultValue
      },
      secondColor: {
        type: Sequelize.STRING,
        allowNull: true, // MUST have a value. Set defaultValue
      },
      darkColor: {
        type: Sequelize.STRING,
        allowNull: true, // MUST have a value. Set defaultValue
      },
      lightColor: {
        type: Sequelize.STRING,
        allowNull: true, // MUST have a value. Set defaultValue
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    /* Delete table */
    await queryInterface.dropTable('colors');
  },
};
