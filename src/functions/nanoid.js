import { nanoid } from 'nanoid/non-secure';

export function nid() {
  return nanoid(6)
}