import { Context } from 'hono';
import { staticDatabase } from '../../data/staticDatabase';
import { ReadOneParkingView } from '../../views/parking/ReadOneParkingView';

export const ReadOneParkingController = (c: Context) => {
  const id = parseInt(c.req.param('id'), 10);
  const parking = staticDatabase.parkings.find(parking => parking.id === id);

  if (!parking) {
    return c.text('Parking not found', 404);
  }

  return c.html(ReadOneParkingView({ parking }));
};
