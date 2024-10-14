import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentExam } from './entities/student_exam.entity';
import { Student } from 'src/student/entities/student.entity';
import { Exam } from 'src/exam/entities/exam.entity';

@Injectable()
export class StudentExamService {
  constructor(
    @InjectRepository(StudentExam)
    private studentExamRepository: Repository<StudentExam>,

    @InjectRepository(Student)
    private studentRepository: Repository<Student>,

    @InjectRepository(Exam)
    private examRepository: Repository<Exam>,
  ) { }

  // Método para associar um estudante a um exame e definir a nota (score)
  async create(studentId: string, examId: string, score?: number): Promise<StudentExam> {
    const student = await this.studentRepository.findOneBy({ student_id: studentId });
    if (!student) {
      throw new NotFoundException(`Student with ID ${studentId} not found`);
    }

    const exam = await this.examRepository.findOneBy({ exam_id: examId });
    if (!exam) {
      throw new NotFoundException(`Exam with ID ${examId} not found`);
    }

    const studentExam = this.studentExamRepository.create({
      student,
      exam,
      score
    });

    return await this.studentExamRepository.save(studentExam);
  }

  // Método para buscar todos os relacionamentos Student-Exam
  async findAll(): Promise<StudentExam[]> {
    return await this.studentExamRepository.find({ relations: ['student', 'exam'] });
  }

  // Método para buscar um relacionamento específico pelo ID
  async findOne(id: string): Promise<StudentExam> {
    const studentExam = await this.studentExamRepository.findOne({
      where: { student_exam_id: id },
      relations: ['student', 'exam'],
    });

    if (!studentExam) {
      throw new NotFoundException(`StudentExam with ID ${id} not found`);
    }

    return studentExam;
  }

  // Método para atualizar a nota (score) de um estudante em um exame
  async updateScore(studentExamId: string, newScore: number): Promise<StudentExam> {
    const studentExam = await this.studentExamRepository.findOneBy({ student_exam_id: studentExamId });

    if (!studentExam) {
      throw new NotFoundException(`StudentExam with ID ${studentExamId} not found`);
    }

    studentExam.score = newScore;
    return await this.studentExamRepository.save(studentExam);
  }
}
