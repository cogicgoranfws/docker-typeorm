import 'reflect-metadata';
import { dataSource } from './database/source';
import express from 'express'
import { App } from './app/App';


async function bootstrap() {
    const app = new App();
    // app.
    const dbInitResult = await dataSource.initialize();
    console.log(dataSource);

}

bootstrap();

