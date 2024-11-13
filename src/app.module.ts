import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST_DB,
      port: +process.env.PORT_DB,
      database: process.env.NAME_DB,
      username: process.env.USERNAME_DB,
      password: process.env.PASSWORD_DB,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductsModule,
    CommonModule,
    SeedModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}