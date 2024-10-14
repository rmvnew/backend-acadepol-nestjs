import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { OptionService } from './option.service';
import { Option } from './entities/option.entity';

@Controller('options')
export class OptionController {
  constructor(private readonly optionService: OptionService) { }

  @Post()
  async create(@Body() optionData: Partial<Option>): Promise<Option> {
    return this.optionService.create(optionData);
  }

  @Get()
  async findAll(): Promise<Option[]> {
    return this.optionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Option> {
    return this.optionService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() optionData: Partial<Option>): Promise<Option> {
    return this.optionService.update(id, optionData);
  }
}
