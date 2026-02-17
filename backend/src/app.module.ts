import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
  
imports: [
  SequelizeModule.forRoot({
    
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
username: 'postgres',
    password: 'homam12345',
    database: 'ecommerce',
    autoLoadModels: true,
    synchronize: true,
  }),
  ProductsModule,
],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
