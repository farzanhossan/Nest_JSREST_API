import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  userName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  type?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
