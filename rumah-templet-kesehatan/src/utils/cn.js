/**
 * cn.js
 *
 * Utility untuk menggabungkan class Tailwind secara kondisional.
 * Menggunakan clsx + tailwind-merge agar tidak terjadi konflik class.
 */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
