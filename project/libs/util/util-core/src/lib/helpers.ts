import { plainToInstance, ClassConstructor } from 'class-transformer';

export function fillObject<T, V>(someDto: ClassConstructor<T>, plainObject: V) {
  return plainToInstance(someDto, plainObject, {
    excludeExtraneousValues: true,
  });
}

export function getMongoConnectionString({
  userName,
  password,
  host,
  port,
  databaseName,
  authDatabase,
}): string {
  return `mongodb://${userName}:${password}@${host}:${port}/${databaseName}?authSource=${authDatabase}`;
}
