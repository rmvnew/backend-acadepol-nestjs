import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { StudentExamService } from './student_exam.service';
import { StudentExam } from './entities/student_exam.entity';

@Controller('student-exams')
export class StudentExamController {
  constructor(private readonly studentExamService: StudentExamService) { }

  @Post()
  async create(
    @Body('studentId') studentId: string,
    @Body('examId') examId: string,
    @Body('score') score?: number
  ): Promise<StudentExam> {
    return this.studentExamService.create(studentId, examId, score);
  }

  @Get()
  async findAll(): Promise<StudentExam[]> {
    return this.studentExamService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StudentExam> {
    return this.studentExamService.findOne(id);
  }

  @Put(':id/score')
  async updateScore(@Param('id') id: string, @Body('newScore') newScore: number): Promise<StudentExam> {
    return this.studentExamService.updateScore(id, newScore);
  }
}
