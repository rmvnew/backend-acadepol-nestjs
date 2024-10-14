import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exam } from './entities/exam.entity';

@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(Exam)
    private examRepository: Repository<Exam>,
  ) { }

  async create(examData: Partial<Exam>): Promise<Exam> {
    const exam = this.examRepository.create(examData);
    return await this.examRepository.save(exam);
  }

  async findAll(): Promise<Exam[]> {
    return await this.examRepository.find({ relations: ['students', 'instructor', 'questions'] });
  }

  async findOne(id: string): Promise<Exam> {
    return await this.examRepository.findOne({
      where: { exam_id: id },
      relations: ['students', 'instructor', 'questions'],
    });
  }

  async update(id: string, examData: Partial<Exam>): Promise<Exam> {
    await this.examRepository.update(id, examData);
    return this.findOne(id);
  }
}
