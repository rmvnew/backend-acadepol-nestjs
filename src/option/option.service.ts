import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option } from './entities/option.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private optionRepository: Repository<Option>,
  ) { }

  async create(optionData: Partial<Option>): Promise<Option> {
    const option = this.optionRepository.create(optionData);
    return await this.optionRepository.save(option);
  }

  async findAll(): Promise<Option[]> {
    return await this.optionRepository.find({ relations: ['question'] });
  }

  async findOne(id: string): Promise<Option> {
    return await this.optionRepository.findOneBy({ option_id: id });
  }

  async update(id: string, optionData: Partial<Option>): Promise<Option> {
    await this.optionRepository.update(id, optionData);
    return this.findOne(id);
  }
}
