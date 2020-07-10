import * as path from 'path';
import dbFactory from '../dbFactory';

async function migrate(): Promise<void> {
  const db = dbFactory();
  const directory = path.join(__dirname, '../migrations');

  try {
    const current = await db.migrate.currentVersion({ directory });
    console.log(`Current Version: ${current}`);

    await db.migrate.latest({ directory });
    console.log('Migrations completed successfully');

    const latest = await db.migrate.currentVersion({ directory });
    console.log(`Latest version: ${latest}`);

    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(-1);
  }
}

migrate();
