# Polynomial Reconstruction Assignment

## Description
This project reconstructs a polynomial using a minimum number of points provided in JSON format.  
Each point’s value is encoded in a different base and decoded before processing.

The constant term of the polynomial is computed using Lagrange Interpolation.

## Tech Stack
- JavaScript (Node.js)
- BigInt for large integer handling

## How to Run
1. Place input in `input.json`
2. Run:
   ```bash
   node solution.js
