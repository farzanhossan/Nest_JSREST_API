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

// import * as mongoose from 'mongoose';

// export const UsersSchema = new mongoose.Schema({
//   id: { type: String, required: true },
//   name: { type: String, required: true },
//   username: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
//   type: { type: String, required: true },
// });

// export interface User extends mongoose.Document {
//   id: string;
//   name: string;
//   username: string;
//   email: string;
//   password: string;
//   type: string;
// }
