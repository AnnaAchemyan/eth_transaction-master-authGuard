import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { transactionEntity } from './entityes/transaction.entity';
import {userEntity} from "./entityes/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [transactionEntity,userEntity],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([transactionEntity,userEntity]),
  ],
  exports: [TypeOrmModule],
})
export class DbModule {}
