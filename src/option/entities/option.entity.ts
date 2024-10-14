import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Question } from "src/question/entities/question.entity";

@Entity('TB_OPTION')
export class Option {

    @PrimaryGeneratedColumn()
    option_id: string;

    @Column()
    option_text: string;

    @ManyToOne(() => Question, question => question.options)
    @JoinColumn({ name: 'question_id' })
    question: Question;
}
