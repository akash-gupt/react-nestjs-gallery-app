import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import * as csurf from 'csurf';

export function configureSecurity(app) {
  app.use(helmet());
}
