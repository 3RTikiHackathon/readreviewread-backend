import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/models/user.schema';
import { Types } from 'mongoose';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  /**PRIMITIVE FIND FUNCTIONS */

  async getByEmail(email: string): Promise<UserDocument> {
    return await this.userModel.findOne({ email }).exec();
  }

  async getById(id: Types.ObjectId): Promise<UserDocument> {
    return await this.userModel.findOne({ id }).exec();
  }
}
