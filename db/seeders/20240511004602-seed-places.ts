"use strict";

import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("Places", [
      {
        id: 1,
        travel_id: 1,
        google_places: "ChIJA5LATO4Z2jER111V-v6abAI",
        notes: "Cool, don't need reservation",
        name: "Marina Bay Sands",
        address: "Marina Rd",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete("Places", {}, {});
  },
};
