# Task 2

Using the `fs/promises` module and async/await, write the following program:

1. **Read the number from `instructions.txt`:**  
   The file `instructions.txt` contains a single number (for example, `10`).

2. **Create files based on the number read:**
    - Let `n` be the number read from `instructions.txt`.
    - Create the files `0.txt`, `1.txt`, `2.txt`, …, `n.txt`.
    - Each file should contain the text `File 0`, `File 1`, `File 2`, …, `File n` (matching its filename).

3. **Finish and log a message:**
    - Once all the files have been successfully created, print an informative message to the console and exit.

## Requirements

- **Basic version (2 points):**  
  Can create files **synchronously** (sequentially) using async/await.

- **Advanced version (3 points):**  
  Must **parallelize** the file creation using `Promise.all`.
