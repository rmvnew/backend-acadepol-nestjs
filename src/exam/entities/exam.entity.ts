import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { UserEntity } from "src/user/entities/user.entity";
import { Student } from "src/student/entities/student.entity";
import { Question } from "src/question/entities/question.entity";
import { StudentExam } from "src/student_exam/entities/student_exam.entity";

@Entity('TB_EXAM')
export class Exam {

    @PrimaryGeneratedColumn()
    exam_id: string;

    @Column()
    exam_name: string;

    @Column()
    exam_date: Date;

    @Column({ type: 'float', nullable: true })
    exam_score?: number;

    @ManyToOne(() => UserEntity, user => user.exams)
    @JoinColumn({ name: 'instructor_id' })
    instructor: UserEntity;

    @OneToMany(() => Question, question => question.exam, { cascade: true })
    questions: Question[];

    @OneToMany(() => StudentExam, studentExam => studentExam.exam)
    studentExams: StudentExam[];
}
