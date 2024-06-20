import React from 'react';
import { IEvent } from '@/lib/mongodb/database/models/event.model';

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  return;
  <>
    <div>Checkout</div>;{event} {userId}
  </>;
};

export default Checkout;
