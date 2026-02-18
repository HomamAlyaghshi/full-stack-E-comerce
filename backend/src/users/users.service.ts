import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(email: string, password: string) {
  const existing = await this.userModel.findOne({ where: { email } });
  if (existing) {
    throw new ConflictException('Email already exists');
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const created = await this.userModel.create({
    email,
    passwordHash,
  });

  return this.userModel.findByPk(created.id, {
    attributes: ['id', 'email'],
  });
}


 async findByEmail(email: string) {
  return this.userModel.findOne({
    where: { email },
    attributes: ['id', 'email', 'passwordHash'],
  });
}

}
