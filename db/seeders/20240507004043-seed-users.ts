"use strict";

import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("Users", [
      {
        id: "0a750c6d-758e-4113-806d-4061f49edd13",
        name: "Lola",
        email: "lola@gmail.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "29241ac2-2d21-4406-a8e6-6ea3b7256eb9",
        name: "Kevin Chang",
        email: "kevin.chang@gmail.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "428289a0-d773-4414-b429-2b79ea5145b8",
        name: "Chloes Lim",
        email: "chloes.lim@gmail.com",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkDelete("Users", {}, {});
  },
};
