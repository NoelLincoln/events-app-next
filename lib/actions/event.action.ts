'use server';

import { revalidatePath } from 'next/cache';

import { connectToDatabase } from '@/lib/mongodb/database';
import Event from '@/lib/mongodb/database/models/event.model';
import User from '@/lib/mongodb/database/models/user.model';
// import Category from '@/lib/mongodb/database/models/category.model';
import { handleError } from '@/lib/utils';
import { CreateEventParams, UpdateEventParams } from '@/types';

// CREATE
export async function createEvent({ userId, event, path }: CreateEventParams) {
  try {
    await connectToDatabase();

    const organizer = await User.findById(userId);
    if (!organizer) throw new Error('Organizer not found');

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organizer: userId,
    });
    revalidatePath(path);

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateEvent({ userId, event, path }: UpdateEventParams) {
  try {
    await connectToDatabase();

    const eventToUpdate = await Event.findById(event._id);
    if (!eventToUpdate || eventToUpdate.organizer.toHexString() !== userId) {
      throw new Error('Unauthorized or event not found');
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      event._id,
      { ...event, category: event.categoryId },
      { new: true },
    );
    revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedEvent));
  } catch (error) {
    handleError(error);
  }
}
