import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { MusicModule } from './modules/music/music.module';
import { SportModule } from './modules/sport/sport.module';
// import { AppService } from "./app.service"

@Module({
  imports: [MusicModule, SportModule],
  // providers: [AppService],
  // controllers: [AppController],
})
export class AppModule { }
