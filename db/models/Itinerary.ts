"use strict";

import {
  AutoIncrement,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
} from "sequelize-typescript";

import { Travel } from "./Travel";
import { Place } from "./Place";

interface ItineraryAttributes {
  day: number;
  color: string;
  place_id: number;
  start: Date;
  end: Date;
  index: number;
  travel_id: number;
}

@Table({
  modelName: "Itinerary",
  tableName: "Itineraries",
  underscored: true,
})
export class Itinerary extends Model<ItineraryAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  day!: number;

  @Column
  color!: string;

  @Column
  start?: Date;

  @Column
  end?: Date;

  @Column
  index?: number;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;

  @ForeignKey(() => Travel)
  @Column
  travel_id!: number;

  @BelongsTo(() => Travel)
  travel!: Travel;

  @ForeignKey(() => Place)
  @Column
  place_id!: number;

  @BelongsTo(() => Place)
  place!: Place;
}
