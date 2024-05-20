"use strict";

import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("Places", [
      {
        travel_id: 1,
        google_places: "ChIJA5LATO4Z2jER111V-v6abAI",
        notes: "Cool, don't need reservation",
        name: "Marina Bay Sands",
        address: "Marina Rd",
        lat: 1.3133061244821134,
        lng: 103.93066699939865,
        day: 0,
        idx: 0,
        start: new Date(),
        end: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete("Places", {}, {});
  },
};
