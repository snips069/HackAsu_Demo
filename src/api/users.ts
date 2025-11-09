// User endpoints for new schema
import { db } from '../db';

export const getUser = async (id: number) => {
  return await db.query('SELECT * FROM users WHERE id = $1', [id]);
};

// Validation for migration fields
export const validateUser = (user: any) => {
  if (!user.email) throw new Error('Email required');
  return true;
};