# Task 3

Create a server that responds to three different requests from a web browser: `/increase`, `/decrease`, and `/read`.  
(For example, the full URL in the browser might be: `http://localhost:3000/increase`.)

## Requirements

- **For `/increase` and `/decrease`:**  
  The server should increment or decrement by one a number stored in a file named `counter.txt`.
    - If the file does not exist, the server should create it with an initial value of `0`.
    - The server may return any response for these two routes (for example, the text `OK`).

- **For `/read`:**  
  The server should return the number stored in `counter.txt` to the browser.

## Bonus Point Option

Implement the server so that the common code for `/increase` and `/decrease` is not repeated (for example, checking if the file exists, reading the number from the file, returning a response to the browser, etc.).  
You can achieve this by either:
- Breaking the steps into functions that are reused, or
- Creating a generic/higher-order function that accepts a parameter determining whether the number should be incremented or decremented.
