"use strict";

import {
  Table,
  Column,
  PrimaryKey,
  Model,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

interface TagAttributes {
  id: number;
  name: string;
  emoji: string;
  travel_id: number;
}

@Table({
  modelName: "Tag",
  tableName: "Tags",
  underscored: true,
})
export class Tag extends Model<TagAttributes> {
  @PrimaryKey
  @Column
  id!: number;

  @Column
  name!: string;

  @Column
  emoji?: string;

  @Column
  travel_id!: number;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;
}
