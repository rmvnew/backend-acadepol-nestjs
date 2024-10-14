import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn } from "typeorm";
import { Student } from "src/student/entities/student.entity";
import { Exam } from "src/exam/entities/exam.entity";

@Entity('TB_STUDENT_EXAM')
export class StudentExam {

    @PrimaryGeneratedColumn()
    student_exam_id: string;

    @ManyToOne(() => Student, student => student.studentExams)
    @JoinColumn({ name: 'student_id' })
    student: Student;

    @ManyToOne(() => Exam, exam => exam.studentExams)
    @JoinColumn({ name: 'exam_id' })
    exam: Exam;


    @Column({ type: 'float', nullable: true })
    score?: number;

}
