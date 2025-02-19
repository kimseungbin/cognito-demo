import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'

/**
 * Bootstraps the NestJS application.
 *
 * This asynchronous function creates a NestJS application instance using the AppModule via the NestFactory. 
 * It then starts the application, listening for incoming HTTP requests on the port defined by the environment variable 
 * PORT, or falls back to port 3000 if PORT is not set.
 *
 * @returns A promise that resolves when the application is successfully started.
 */
async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	await app.listen(process.env.PORT ?? 3000)
}

bootstrap()
