import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { ExamService } from './exam.service';
import { Exam } from './entities/exam.entity';

@Controller('exams')
export class ExamController {
  constructor(private readonly examService: ExamService) { }

  @Post()
  async create(@Body() examData: Partial<Exam>): Promise<Exam> {
    return this.examService.create(examData);
  }

  @Get()
  async findAll(): Promise<Exam[]> {
    return this.examService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Exam> {
    return this.examService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() examData: Partial<Exam>): Promise<Exam> {
    return this.examService.update(id, examData);
  }
}
