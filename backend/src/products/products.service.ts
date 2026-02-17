import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.productModel.create({
      name: createProductDto.name,
      price: createProductDto.price,
    });
  }

  findAll() {
    return this.productModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    const deletedCount = await this.productModel.destroy({ where: { id } });
    return { deleted: deletedCount > 0 };
  }
}
