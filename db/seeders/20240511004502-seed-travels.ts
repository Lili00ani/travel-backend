"use strict";

import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("Travels", [
      {
        name: "Lola",
        owner_id: "0a750c6d-758e-4113-806d-4061f49edd13",
        start: new Date("2024-05-20"),
        end: new Date("2024-05-25"),
        pax: 1,
        country_code: "SG",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete("Travels", {}, {});
  },
};
