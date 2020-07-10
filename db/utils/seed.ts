import * as path from 'path';
import dbFactory from '../dbFactory';

async function seed(): Promise<void> {
  const db = dbFactory();
  const directory = path.join(__dirname, '../seed');

  try {
    await db.seed.run({ directory });
  } catch (e) {
    console.log(e);
  }
}

seed();
