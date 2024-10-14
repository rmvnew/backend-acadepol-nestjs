import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/shared/guards/jwt-auth.guard';
import { Bootstrap } from './config/bootstrap';
import { DatabaseModule } from './config/database/database.module';
import { ConfigModule } from './config/environments/config.module';
import { SwaggerModule } from './config/swagger/swagger.module';
import { EmailModule } from './mail/mail.module';
import { ProfileModule } from './profile/profile.module';
import { UserModule } from './user/user.module';
import { HistoricModule } from './historic/historic.module';
import { StudentModule } from './student/student.module';
import { ExamModule } from './exam/exam.module';
import { QuestionModule } from './question/question.module';
import { OptionModule } from './option/option.module';
import { StudentExamModule } from './student_exam/student_exam.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule,
    UserModule,
    DatabaseModule,
    SwaggerModule,
    ProfileModule,
    EmailModule,
    HistoricModule,
    StudentModule,
    ExamModule,
    QuestionModule,
    OptionModule,
    StudentExamModule,
  ],
  controllers: [],
  providers: [

    Bootstrap,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }

  ],
})
export class AppModule { }
