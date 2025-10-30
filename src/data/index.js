// src/data/index.js

// Step 2.1: Kya week1Content yahan import ho raha hai?
import { week1Content } from './week1';
import { week2Content } from './week2'; // Yeh file bhi exist karni chahiye

// Step 2.2: Kya allWeeksData object sahi se banaya gaya hai?
export const allWeeksData = {
  1: week1Content, // Key '1' honi chahiye aur value 'week1Content' honi chahiye
  2: week2Content,
  // Baaki weeks yahan add honge
};