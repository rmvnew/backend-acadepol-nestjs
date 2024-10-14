import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, OneToMany } from "typeorm";
import { Exam } from "src/exam/entities/exam.entity";
import { StudentExam } from "src/student_exam/entities/student_exam.entity";

@Entity("TB_STUDENT")
export class Student {

    @PrimaryGeneratedColumn()
    student_id: string;

    @Column()
    student_name: string;

    @Column()
    student_rg: string;

    @Column()
    student_access_code: string;

    @OneToMany(() => StudentExam, studentExam => studentExam.student)
    studentExams: StudentExam[];
}
