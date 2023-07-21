
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
    abstract song(): Nullable<Song> | Promise<Nullable<Song>>;
}

export class Song {
    name: string;
}

type Nullable<T> = T | null;
