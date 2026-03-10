import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { injectSpeedInsights } from '@vercel/speed-insights';

// Gọi hàm này để kích hoạt theo dõi hiệu năng
injectSpeedInsights();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
