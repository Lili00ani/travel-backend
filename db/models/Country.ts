"use strict";

import {
  HasMany,
  Table,
  Column,
  PrimaryKey,
  Model,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

import { Travel } from "./Travel";

interface CountryAttributes {
  name: string;
  code: string;
}

@Table({
  modelName: "Country",
  tableName: "Countries",
  underscored: true,
})
export class Country extends Model<CountryAttributes> {
  @PrimaryKey
  @Column
  code!: string;

  @Column
  name!: string;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;

  @HasMany(() => Travel)
  travel!: Travel[];
}
