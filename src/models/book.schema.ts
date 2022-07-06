import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from './user.schema';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  _id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: User.name })
  authorId: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  authorName: string;

  @Prop()
  paperBookPrice: number;

  @Prop()
  eBookPrice: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
