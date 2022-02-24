import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from '../../entities/contact.entity';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  read(): Promise<Contact[]> {
    return this.contactService.readAll();
  }

  @Post()
  async create(@Body() contact: Contact): Promise<any> {
    return this.contactService.create(contact);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() contact: Contact): Promise<any> {
    contact.id = Number(id);
    return this.contactService.update(contact);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<any> {
    return this.contactService.delete(id);
  }
}
