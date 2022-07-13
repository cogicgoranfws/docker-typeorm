import 'reflect-metadata';
import { dataSource } from './database/source';


async function bootstrap() {

    const dbInitResult = await dataSource.initialize();
    console.log(dataSource);

}

bootstrap();

