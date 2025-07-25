import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entity/file.entity';

@Module({
  imports : [TypeOrmModule.forFeature([FileEntity])],
  providers: [FilesService],
  exports : [FilesService]
})
export class FilesModule {}
