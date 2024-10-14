import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";
import { NoSpecialChars } from "src/common/decorators/NoSpecialChars.decorator";


export class CreateStudentDto {

    @ApiProperty()
    @IsNotEmpty()
    @Length(5, 50, { message: 'O Nome deve ter entre 5 e 50 caracteres.' })
    @NoSpecialChars({ message: 'O nome não pode conter caracteres especiais, espaços duplos ou espaços no início/fim.' })
    student_name: string;

    @ApiProperty()
    @IsNotEmpty()
    student_rg: string;


}
