import { Injectable } from '@nestjs/common';

@Injectable()
export class MusicService {
    getHello(): string {
        return 'HELLO MUSIC';
    }
}
