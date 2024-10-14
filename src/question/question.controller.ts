import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './entities/question.entity';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) { }

  @Post()
  async create(@Body() questionData: Partial<Question>): Promise<Question> {
    return this.questionService.create(questionData);
  }

  @Get()
  async findAll(): Promise<Question[]> {
    return this.questionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Question> {
    return this.questionService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() questionData: Partial<Question>): Promise<Question> {
    return this.questionService.update(id, questionData);
  }
}
