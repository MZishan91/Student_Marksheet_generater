const { Client } = require('pg');

const connectionString = 'postgresql://postgres.ikaqdwzsamtbmpzyagoq:MyAdil@@9158$$@aws-0-ap-south-1.pooler.supabase.com:6543/postgres';

const client = new Client({
    connectionString: connectionString,
});

client.connect()
    .then(() => console.log('Connected to PostgreSQL!'))
    .catch(err => console.error('Connection error', err.stack));
