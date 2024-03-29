import {dirname, join} from 'path';
import {fileURLToPath} from 'url';


const base = dirname(fileURLToPath(import.meta.url));

export const rutas = {
    base: join(base, '..'),
    views: join(base, '..', 'views'),
};