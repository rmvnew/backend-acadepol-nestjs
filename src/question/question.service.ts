import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) { }

  async create(questionData: Partial<Question>): Promise<Question> {
    const question = this.questionRepository.create(questionData);
    return await this.questionRepository.save(question);
  }

  async findAll(): Promise<Question[]> {
    return await this.questionRepository.find({ relations: ['options'] });
  }

  async findOne(id: string): Promise<Question> {
    return await this.questionRepository.findOne({
      where: { question_id: id },
      relations: ['options'],
    });
  }

  async update(id: string, questionData: Partial<Question>): Promise<Question> {
    await this.questionRepository.update(id, questionData);
    return this.findOne(id);
  }
}
