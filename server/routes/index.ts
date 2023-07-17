import { Router } from 'express';
import mongoose from 'mongoose';

const healthChecker = Router();

healthChecker.get('/', (_req, res) => res.json({ title: 'PMS - TARGET & GOAL SERVICE' }));

healthChecker.get('/health', (_req, res) => {
  const isHealthy = mongoose.connection.readyState === 1;
  if (isHealthy) {
    return res.status(200).json({
      successs: true,
      messsage: 'PMS  TARGET & GOAL SERVICE works properly',
      vesion: '1.0.0',
    });
  }
  return res.status(503).json({
    successs: false,
    messsage: `PMS  TARGET & GOAL SERVICE does not works properly. mongoose connection state is ${mongoose.connection.readyState}`,
  });
});

export = healthChecker;