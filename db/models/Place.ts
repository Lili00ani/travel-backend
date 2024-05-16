"use strict";

import {
  AutoIncrement,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  Model,
  CreatedAt,
  UpdatedAt,
  HasMany,
} from "sequelize-typescript";

import { Travel } from "./Travel";
import { Itinerary } from "./Itinerary";

export interface PlaceAttributes {
  travel_id: number;
  google_places: string;
  lat: number;
  lng: number;
  notes: string;
  name: string;
  address: string;
}

@Table({
  modelName: "Place",
  tableName: "Places",
  underscored: true,
})
export class Place extends Model<PlaceAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  google_places!: string;

  @Column
  lat?: string;

  @Column
  lng?: string;

  @Column
  notes?: string;

  @Column
  name?: string;

  @Column
  address?: string;

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

  @HasMany(() => Itinerary)
  itinerary!: Itinerary[];
}
