import { Module } from '@nestjs/common';
import { AppController, DataController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { UserSchema } from './user/user.schema';
import { config } from 'dotenv';
config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [AppController, DataController, UserController],
  providers: [AppService],
})
export class AppModule {}
