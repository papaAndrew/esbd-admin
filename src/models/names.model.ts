import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, postgresql: {schema: 'public', table: 'names'}}})
export class Names extends Entity {
  @property({
    type: 'number',
    required: false,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    length: 32,
    postgresql: {columnName: 'name', dataType: 'character varying', dataLength: 32, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  name: string;

  @property({
    type: 'number',
    required: true,
    scale: 0,
    postgresql: {columnName: 'audit', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  audit: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Names>) {
    super(data);
  }
}

export interface NamesRelations {
  // describe navigational properties here
}

export type NamesWithRelations = Names & NamesRelations;
