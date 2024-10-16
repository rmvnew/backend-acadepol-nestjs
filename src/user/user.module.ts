import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoricModule } from 'src/historic/historic.module';
import { EmailModule } from 'src/mail/mail.module';
import { ProfileModule } from 'src/profile/profile.module';
import { UserEntity } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
    ]),
    EmailModule,
    ProfileModule,
    ProfileModule,
    forwardRef(() => HistoricModule),

  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule { }
