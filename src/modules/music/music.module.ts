import { Module } from '@nestjs/common';
import { MusicController } from './music.controller';
import { SongResolver } from './music.resolver';
import { MusicService } from './music.service';

@Module({
  controllers: [MusicController],
  providers: [MusicService, SongResolver]
})
export class MusicModule {}
