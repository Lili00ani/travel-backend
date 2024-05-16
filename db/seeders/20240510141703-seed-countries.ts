"use strict";

import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("Countries", [
      {
        name: "Singapore",
        code: "SG",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Malaysia",
        code: "MY",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete("Countries", {}, {});
  },
};
