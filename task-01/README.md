# Task 1


Create a program that copies the contents of one file to another based on simple instructions.

When executed, the program reads the contents of a file named **"instructions.txt"**.  
This file will contain two filenames:
- The first filename represents the **source file** (from which the program will copy data).
- The second filename represents the **destination file** (where the program will copy the data).

Both **"instructions.txt"** and the **source file** must exist; if they do not, the program should notify the user.  
If the destination file does not exist, the program should first create it and then copy the data into it.


---

## 📖 Example

### **Contents of `instructions.txt`**
input.txt output.txt
### **Contents of `input.txt`**
lorem ipsum dolor sit amet

### **Running the program**
node index.mjs

### **Result**
A new file `output.txt` is created with the following content:
lorem ipsum dolor sit amet