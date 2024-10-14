import { Historic } from 'src/historic/entities/historic.entity';
import { ProfileEntity } from "src/profile/entities/profile.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('TB_USER')
export class UserEntity {

    @PrimaryGeneratedColumn()
    user_id: string

    @Column()
    user_name: string

    @Column()
    user_email: string

    @Column({ nullable: true })
    user_rg?: string

    @Column({ nullable: true })
    user_recovery_code: number

    @Column({ nullable: false })
    user_password: string

    @Column()
    user_profile_id: string

    @Column()
    status: boolean

    @Column()
    user_first_access: boolean

    @ManyToOne(() => ProfileEntity, (profile) => profile.users)
    @JoinColumn({ name: 'user_profile_id' })
    profile: ProfileEntity

    @Column({ nullable: true })
    user_refresh_token: string;

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_at: Date

    @OneToMany(() => Historic, historic => historic.user)
    historics: Historic[];


}
