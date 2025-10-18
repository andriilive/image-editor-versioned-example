// lib/utils/password.ts
import {randomBytes, scryptSync, timingSafeEqual} from "crypto";

/**
 * Create a salted hash for a plaintext password.
 * Returns a string in the form: salt:hash
 */
export function saltAndHashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

/**
 * Verify a plaintext password against a stored `salt:hash` value.
 */
export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const derived = scryptSync(password, salt, 64).toString("hex");
  // Use timing-safe compare
  const a = Buffer.from(derived, "hex");
  const b = Buffer.from(hash, "hex");
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
