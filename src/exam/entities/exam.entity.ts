import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { UserEntity } from "src/user/entities/user.entity";
import { Student } from "src/student/entities/student.entity";

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

    // Relacionamento com Student - muitos estudantes podem fazer o mesmo exame
    @ManyToMany(() => Student, student => student.exams)
    @JoinTable({
        name: "TB_STUDENT_EXAM", // Nome da tabela intermediária para armazenar estudantes e exames
        joinColumn: { name: "exam_id", referencedColumnName: "exam_id" },
        inverseJoinColumn: { name: "student_id", referencedColumnName: "student_id" }
    })
    students: Student[];

    // Relacionamento com UserEntity - um instrutor aplica o exame
    @ManyToOne(() => UserEntity, user => user.exams)
    @JoinColumn({ name: 'instructor_id' })
    instructor: UserEntity;
}
