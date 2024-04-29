'use server';

import { CreateUserParams } from '@/types';
import { handleError } from '../utils';
import User from '../mongodb/database/models/user.model';
import { connectToDatabase } from '../mongodb/database';

export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};
