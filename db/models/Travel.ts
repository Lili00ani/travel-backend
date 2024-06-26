"use strict";

import {
  Table,
  BelongsTo,
  Column,
  PrimaryKey,
  ForeignKey,
  Model,
  HasMany,
  DataType,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
} from "sequelize-typescript";
import { Country } from "./Country";
import { User } from "./User";
import { Place } from "./Place";

export interface TravelAttributes {
  name: string;
  owner_id: string;
  start: Date;
  end: Date;
  pax: number;
  country_code: string;
}

@Table({
  modelName: "Travel",
  tableName: "Travels",
  underscored: true,
})
export class Travel extends Model<TravelAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  name!: string;

  @Column
  start!: Date;

  @Column
  end!: Date;

  @Column
  pax!: number;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;

  @ForeignKey(() => Country)
  @Column
  country_code!: string;

  @BelongsTo(() => Country)
  country!: Country;

  @ForeignKey(() => User)
  @Column
  owner_id!: number;

  @BelongsTo(() => User)
  user!: User;

  @HasMany(() => Place)
  place!: Place[];
}
