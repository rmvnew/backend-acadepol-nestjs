import { Controller, Get, Post, Body, Param, Put, UseGuards, Req } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PermissionGuard } from 'src/auth/shared/guards/permission.guard';
import AccessProfile from 'src/auth/enums/permission.type';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { RequestWithUser } from 'src/common/interfaces/user.request.interface';
import { CreateStudentDto } from './dto/create-student.dto';

@Controller('students')
@ApiTags('Students')
@ApiBearerAuth()

export class StudentController {
  constructor(private readonly studentService: StudentService) { }

  @Post()
  @UseGuards(PermissionGuard(AccessProfile.ADMIN_MANAGER_OWNER))

  @ApiOperation({
    description: `# Esta rota adiciona um novo Aluno.
    Tipo: Autenticada. 
    Acesso: [Administrador]` })

  @ApiBody({
    description: '## Schema padrão para criar Alunos.',
    type: CreateStudentDto
  })
  async create(
    @Req() req: RequestWithUser,
    @Body() createStudentDto: CreateStudentDto
  ): Promise<Student> {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Student> {
    return this.studentService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() studentData: Partial<Student>): Promise<Student> {
    return this.studentService.update(id, studentData);
  }
}
