import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Exam } from "src/exam/entities/exam.entity";

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

    @ManyToMany(() => Exam, exam => exam.students)
    exams: Exam[];
}
