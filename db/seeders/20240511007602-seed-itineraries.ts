"use strict";

import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("Itineraries", [
      {
        id: 1,
        day: 1,
        color: "FF5733",
        place_id: 1,
        start: new Date("2024-05-20T16:00:00"),
        end: new Date("2024-05-20T18:00:00"),
        index: 1,
        travel_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete("Itineraries", {}, {});
  },
};
