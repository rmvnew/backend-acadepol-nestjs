import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { UserEntity } from "src/user/entities/user.entity";
import { Student } from "src/student/entities/student.entity";
import { Question } from "src/question/entities/question.entity";

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

    @ManyToMany(() => Student, student => student.exams)
    @JoinTable({
        name: "TB_STUDENT_EXAM",
        joinColumn: { name: "exam_id", referencedColumnName: "exam_id" },
        inverseJoinColumn: { name: "student_id", referencedColumnName: "student_id" }
    })
    students: Student[];

    @ManyToOne(() => UserEntity, user => user.exams)
    @JoinColumn({ name: 'instructor_id' })
    instructor: UserEntity;

    @OneToMany(() => Question, question => question.exam, { cascade: true })
    questions: Question[];
}
