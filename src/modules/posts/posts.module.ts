import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entity/post.entity';
import { PostLikeEntity } from './entity/postLike.entity';
import { CommentEntity } from './entity/comment.entity';
import { CommentLikeEntity } from './entity/commentLike.entity';

@Module({
  imports : [TypeOrmModule.forFeature([PostEntity, PostLikeEntity, CommentEntity, CommentLikeEntity])],
  providers: [PostsService],
  controllers: [PostsController]
})
export class PostsModule {}
