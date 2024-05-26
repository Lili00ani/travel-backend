"use strict";

import {
  AutoIncrement,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  Model,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
import { Place } from "./Place";
import { Tag } from "./Tag";

@Table({
  modelName: "PlaceTag",
  tableName: "Places_Tags",
  underscored: true,
})
export class PlaceTag extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @ForeignKey(() => Place)
  @Column
  place_id!: number;

  @ForeignKey(() => Tag)
  @Column
  tag_id!: number;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;
}
