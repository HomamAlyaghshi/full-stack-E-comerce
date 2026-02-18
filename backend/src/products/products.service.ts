import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Injectable, NotFoundException } from '@nestjs/common';


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
  return this.productModel.findAll({ order: [['id', 'DESC']] });
}

  async findOne(id: number) {
  const product = await this.productModel.findByPk(id);
  if (!product) throw new NotFoundException('Product not found');
  return product;
}


async update(id: number, updateProductDto: UpdateProductDto) {
  const product = await this.findOne(id); 
  return product.update({
    ...(updateProductDto.name !== undefined ? { name: updateProductDto.name } : {}),
    ...(updateProductDto.price !== undefined ? { price: updateProductDto.price } : {}),
  });
}


  async remove(id: number) {
    const deletedCount = await this.productModel.destroy({ where: { id } });
    return { deleted: deletedCount > 0 };
  }
}
