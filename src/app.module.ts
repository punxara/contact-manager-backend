import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { ContactModule } from './module/contact/contact.module';
import { ContactController } from './module/contact/contact.controller';
import { ContactService } from './module/contact/contact.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'nestjs-postgres-typeorm-db',
      entities: [Contact],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Contact]),
    ContactModule,
  ],
  controllers: [AppController, ContactController],
  providers: [AppService, ContactService],
})
export class AppModule {}
