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
} from "sequelize-typescript";
import { Country } from "./Country";
import { User } from "./User";
import { Itinerary } from "./Itinerary";
import { Place } from "./Place";

export interface TravelAttributes {
  id: number;
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

  @HasMany(() => Itinerary)
  itinerary!: Itinerary[];

  @HasMany(() => Place)
  place!: Place[];
}
