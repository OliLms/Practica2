import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import type { ApplicationRef } from '@angular/core';

export default function bootstrap(context: any): Promise<ApplicationRef> {
	return bootstrapApplication(App, config, context);
}
