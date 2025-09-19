# Terminal & Shell Scripting 💻

### Terminal Basics Commands 📝

```bash
pwd         # print current directory
ls          # list files
cd folder/  # move into a folder
cd ..       # move back
mkdir test  # make new folder
touch file.txt   # create a file
rm file.txt      # delete a file
```
Use man <command> to see full documentation for a command.

### Shell Scripting 📝
A shell script is a file with commands executed in sequence. It can be run with `./script.sh`. 

You can write a shell script in a text editor, save it with a .sh extension, and make it executable with `chmod +x script.sh`.
Create a file: `hello.sh`:
```bash
#!/bin/bash
echo "Hello, World!"
```

Make it executable:
```bash
chmod +x hello.sh
```

Run it:
```bash
./hello.sh
```
- Use `#!/bin/bash` at the top of the script to specify the shell to use.

### Variables & User Input

Create a file: `test.sh`:
```bash
#!/bin/bash
name="Alice"
echo "Hello, $name"

read -p "Enter your age: " age
echo "You are $age years old"

```
- `$name`   → references variable

- `read -p` → takes user input

- `age` → references variable

Create a file: `test.sh`:
```bash
echo "Enter your name: "
read name
echo "Hello, $name!"
```

### Functions

Create a file: `hello.sh`:

```bash
#!/bin/bash
function hello {
    echo "Hello, World!"
}
hello
```
 

Create a file: `greet.sh`:
```bash
#!/bin/bash
greet() {
  echo "Hello $1"
}

greet "Bob"
```

### Conditional Statements

```bash
#!/bin/bash
read -p "Enter a number: " num
if [ $num -gt 10 ]; then
  echo "Number is greater than 10"
else
  echo "Number is 10 or less"
fi
```
- `[ $num -gt 10 ]` → `-gt` = greater than

- `if-else` → decision making

### Loops

```bash
#!/bin/bash
for i in {1..5}; do
  echo "Iteration $i"
done

# While loop
count=1
while [ $count -le 5 ]; do
  echo "Count $count"
  ((count++))
done
```

- `for i in {1..5}; do` → loop through numbers 1 to 5

- `echo "Iteration $i"` → print the iteration

- `((count++))` → increment the count

- `while [ $count -le 5 ]; do` → loop until condition is false

 
 ### Permissions & Execution

 ```bash
 chmod +x script.sh # make script executable
 ./script.sh # run script
 ```
 
 - Always give execute permission for shell scripts.
 