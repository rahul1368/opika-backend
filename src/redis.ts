// redis.ts

import Redis from 'ioredis';

const redisOptions = {
    host: 'redis',
    port:  6379,
    // Add other configuration options as needed
  };
const redisClient = new Redis(redisOptions);

// Check if connected to Redis
redisClient.on('connect', () => {
    console.log('Connected to Redis');
});
  
// Check for any connection error
redisClient.on('error', (err) => {
console.error('Redis connection error:', err);
});

export default redisClient;
