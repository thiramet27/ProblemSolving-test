# Part-Time Developer Assessment - Problem Statement

## Problem: Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D, and M.

| Symbol | Value |
|--------|-------|
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

For example:
- 2 is written as II in Roman numerals (I + I).
- 12 is written as XII (X + II).
- 27 is written as XXVII (X + X + V + II).

Roman numerals are usually written from largest to smallest from left to right. However, there are exceptions for certain numbers, where subtraction is used:
- I can be placed before V (5) and X (10) to make 4 (IV) and 9 (IX).
- X can be placed before L (50) and C (100) to make 40 (XL) and 90 (XC).
- C can be placed before D (500) and M (1000) to make 400 (CD) and 900 (CM).

### Objective

Given a Roman numeral, convert it to an integer.

### Examples

- **Example 1:**
  - **Input:** `s = "III"`
  - **Output:** `3`
  - **Explanation:** III = 3.

- **Example 2:**
  - **Input:** `s = "LVIII"`
  - **Output:** `58`
  - **Explanation:** L = 50, V = 5, III = 3.

- **Example 3:**
  - **Input:** `s = "MCMXCIV"`
  - **Output:** `1994`
  - **Explanation:** M = 1000, CM = 900, XC = 90, and IV = 4.

### Instructions

Please provide a solution for the problem above, along with a detailed explanation of your thought process, including:

- Your approach to solving the problem
- Any challenges you faced
- The reasoning behind your chosen solution