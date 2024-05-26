"use strict";

import {
  AutoIncrement,
  BelongsToMany,
  Table,
  Column,
  PrimaryKey,
  Model,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

import { PlaceTag } from "./PlaceTag";
import { Place } from "./Place";

export interface TagAttributes {
  name: string;
  travel_id: number;
}

@Table({
  modelName: "Tag",
  tableName: "Tags",
  underscored: true,
})
export class Tag extends Model<TagAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  name!: string;

  @Column
  travel_id!: number;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;

  @BelongsToMany(() => Place, () => PlaceTag)
  places?: Place[];
}
