import { Module } from '@nestjs/common';
import { MusicModule } from './modules/music/music.module';
import { SportModule } from './modules/sport/sport.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
    MusicModule,
    SportModule,
  ],
})
export class AppModule { }
