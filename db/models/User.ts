"use strict";

import {
  Default,
  Table,
  Column,
  PrimaryKey,
  HasMany,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

import { Travel } from "./Travel";

interface UserAttributes {
  id: string;
  name: string;
  email: string;
}

@Table({
  modelName: "User",
  tableName: "Users",
  underscored: true,
})
export class User extends Model<UserAttributes> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUIDV4)
  id!: string;

  @Column
  name?: string;

  @Column
  email!: string;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;

  @HasMany(() => Travel)
  travel!: Travel[];
}
