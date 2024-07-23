import React from 'react';
import { IEvent } from '@/lib/mongodb/database/models/event.model';
import { auth } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { formatDateTime } from '@/lib/utils';
import { DeleteConfirmation } from './DeleteConfirmation';

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isEventCreator = event.organizer
    ? userId === event.organizer._id.toString()
    : false;

  return (
    <div className="group relative flex min-h-[400px] w-full max-w-[400px] transform flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
      <Link
        href={`/events/${event._id}`}
        className="relative block h-60 w-full"
      >
        <Image
          src={event.imageUrl}
          alt="Event Image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </Link>

      {isEventCreator && !hidePrice && (
        <div className="absolute right-3 top-3 flex flex-col items-center gap-2 rounded-lg bg-white p-2 shadow-md">
          <Link href={`/events/${event._id}/update`}>
            <Image
              src="/assets/icons/edit.svg"
              alt="edit"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </Link>
          <DeleteConfirmation eventId={event._id} />
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          {!hidePrice && (
            <div className="mb-2 flex gap-2">
              <span className="p-semibold-14 text-green-60 w-min rounded-full bg-green-100 px-4 py-1">
                {event.isFree ? 'FREE' : `$${event.price}`}
              </span>
              <p className="p-semibold-14 line-clamp-1 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500">
                {event.category.name}
              </p>
            </div>
          )}

          <p className="p-medium-16 p-medium-18 mb-2 text-grey-500">
            {formatDateTime(event.startDateTime).dateTime}
          </p>

          <Link href={`/events/${event._id}`}>
            <h3 className="p-medium-16 md:p-medium-20 mb-2 line-clamp-2 flex-1 text-black">
              {event.title}
            </h3>
          </Link>
        </div>

        <div className="flex items-center justify-between">
          {event.organizer ? (
            <p className="p-medium-14 md:p-medium-16 text-grey-600">
              {event.organizer.firstName} {event.organizer.lastName}
            </p>
          ) : (
            <p className="p-medium-14 md:p-medium-16 text-grey-600">
              Organizer not specified
            </p>
          )}

          {hasOrderLink && (
            <Link
              href={`/orders?eventId=${event._id}`}
              className="flex items-center gap-2"
            >
              <p className="text-primary-500">Order Details</p>
              <Image
                src="/assets/icons/arrow.svg"
                alt="search"
                width={10}
                height={10}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
