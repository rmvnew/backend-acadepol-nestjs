import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Exam } from "src/exam/entities/exam.entity";
import { Option } from "src/option/entities/option.entity";

export enum QuestionType {
    MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
    OPEN_RESPONSE = "OPEN_RESPONSE"
}

@Entity('TB_QUESTION')
export class Question {

    @PrimaryGeneratedColumn()
    question_id: string;

    @Column()
    question_text: string;

    @Column({
        type: 'enum',
        enum: QuestionType,
        default: QuestionType.MULTIPLE_CHOICE
    })
    question_type: QuestionType;

    @ManyToOne(() => Exam, exam => exam.questions)
    @JoinColumn({ name: 'exam_id' })
    exam: Exam;

    @OneToMany(() => Option, option => option.question, { cascade: true })
    options: Option[];

    @Column({ nullable: true })
    correct_option_id?: string;

    @Column({ nullable: true })
    correct_answer_text?: string;
}
