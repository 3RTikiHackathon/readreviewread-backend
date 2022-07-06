import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Role } from 'src/assets/enum';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  _id: Types.ObjectId;

  @Prop({ required: true })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
