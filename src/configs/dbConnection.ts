import { Pool } from 'pg';

const host = process.env.HOST;
const port = process.env.PORT;

export default new Pool({
  max: 20,
  connectionString: `postgres://postgres:admin@${host}:${port}`,
  idleTimeoutMillis: 30000,
});
