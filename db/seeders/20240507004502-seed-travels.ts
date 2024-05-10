"use strict";

import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("Travels", [
      {
        id: "696064e6-5714-4610-9ce5-e2cffc41b3d5",
        name: "Lola",
        owner_id: "0a750c6d-758e-4113-806d-4061f49edd13",
        start_date: new Date("2024-05-20"),
        end_date: new Date("2024-05-25"),
        pax: 1,
        destination: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete("Travels", {}, {});
  },
};
