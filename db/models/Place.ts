"use strict";

import {
  AutoIncrement,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  Model,
  CreatedAt,
  UpdatedAt,
  HasMany,
} from "sequelize-typescript";

import { Travel } from "./Travel";
import { Tag } from "./Tag";
import { PlaceTag } from "./PlaceTag";

export interface PlaceAttributes {
  travel_id: number;
  google_places: string;
  lat: number;
  lng: number;
  notes?: string;
  name: string;
  address: string;
  day: number;
  idx: number;
  start?: Date;
  end?: Date;
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
  lat?: number;

  @Column
  lng?: number;

  @Column
  notes?: string;

  @Column
  name?: string;

  @Column
  address?: string;

  @Column
  day!: number;

  @Column
  idx!: number;

  @Column
  start?: Date;

  @Column
  end?: Date;

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

  @BelongsToMany(() => Tag, () => PlaceTag)
  tags?: Tag[];
}
