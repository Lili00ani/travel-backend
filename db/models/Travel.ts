"use strict";

import {
  Default,
  Table,
  Column,
  PrimaryKey,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

interface TravelAttributes {
  id: string;
  name: string;
  owner_id: string;
  user_id: string;
  start_date: Date;
  end_date: Date;
  pax: number;
  destination: number;
}

@Table({
  modelName: "Travel",
  tableName: "Travels",
})
export class Travel extends Model<TravelAttributes> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUIDV4)
  id!: string;

  @Column
  name!: string;

  @Column(DataType.UUIDV4)
  owner_id!: string;

  @Column(DataType.UUIDV4)
  user_id?: string;

  @Column
  start_date!: Date;

  @Column
  end_date!: Date;

  @Column
  pax!: number;

  @Column
  destination!: number;

  @CreatedAt
  @Column
  created_at!: Date;

  @UpdatedAt
  @Column
  updated_at!: Date;
}
