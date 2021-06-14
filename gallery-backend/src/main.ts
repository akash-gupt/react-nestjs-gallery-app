import { AppModule } from './app.module';
import { createNestApp } from './bootstrap/bootstrap';

const port = Number(process.env.PORT);

createNestApp(AppModule, port, {
  swagger: true,
});
