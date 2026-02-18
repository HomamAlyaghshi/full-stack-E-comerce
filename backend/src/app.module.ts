import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  
imports: [
  SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'homam12345',
    database: process.env.DB_NAME || 'ecommerce',
    autoLoadModels: true,
  }),
  UsersModule,
  ProductsModule,
  AuthModule,
],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
