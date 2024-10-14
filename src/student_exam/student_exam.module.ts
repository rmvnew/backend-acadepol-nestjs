import { Module } from '@nestjs/common';
import { StudentExamService } from './student_exam.service';
import { StudentExamController } from './student_exam.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentExam } from './entities/student_exam.entity';
import { Student } from 'src/student/entities/student.entity';
import { Exam } from 'src/exam/entities/exam.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([StudentExam, Student, Exam])
  ],
  controllers: [StudentExamController],
  providers: [StudentExamService],
  exports: [StudentExamService]
})
export class StudentExamModule { }
