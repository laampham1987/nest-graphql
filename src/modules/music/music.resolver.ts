import { Query, Resolver } from '@nestjs/graphql';
import { Song } from '../../graphql';
import { MusicService } from './music.service';

@Resolver((of) => Song)
export class SongResolver {
  constructor(private readonly musicService: MusicService) {}

  @Query((returns) => Song, { name: 'song' })
  async getSong(): Promise<Song> {
    return { name: this.musicService.getHello() };
  }
}
