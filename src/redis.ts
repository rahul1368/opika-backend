// redis.ts

import Redis from 'ioredis';

const redisClient = new Redis();

// Check if connected to Redis
redisClient.on('connect', () => {
    console.log('Connected to Redis');
});
  
// Check for any connection error
redisClient.on('error', (err) => {
console.error('Redis connection error:', err);
});

export default redisClient;
