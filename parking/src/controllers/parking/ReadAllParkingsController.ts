import { Context } from 'hono';
import { staticDatabase } from '../../data/staticDatabase';
import { ReadAllParkingsView } from '../../views/parking/ReadAllParkingsView';

export const ReadAllParkingsController = (c: Context) => {
    const view = ReadAllParkingsView({ parkings: staticDatabase.parkings });
return c.html(view);
};
