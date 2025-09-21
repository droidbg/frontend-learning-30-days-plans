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
 


### Error Handling in Bash

```bash
#!/bin/bash
set -e # exit on error
set -u # exit on undefined variable
set -o pipefail # exit on pipe failure
```
In real life, scripts fail (missing files, permissions, network issues). We add error handling so the script doesn’t silently break.

 Example: Safe File Deletion
 ```bash 
 #!/bin/bash
set -e  # exit on first error

FILE=$1

if [ -z "$FILE" ]; then
  echo "❌ Error: No file specified."
  exit 1
fi

if [ ! -f "$FILE" ]; then
  echo "❌ Error: File $FILE does not exist."
  exit 1
fi

rm "$FILE"
echo "✅ Deleted $FILE successfully."

 ```

- `set -e` → exits if any command fails

- `exit 1` → returns error code (good for CI/CD pipelines)

#### Deployment Automation Script


```bash 
#!/bin/bash
set -e

APP_DIR="/home/user/myapp"
REPO="git@github.com:user/myapp.git"

echo "🚀 Starting deployment..."

# Step 1: Clone or update repo
if [ -d "$APP_DIR" ]; then
  echo "📂 Updating existing project..."
  cd "$APP_DIR"
  git pull origin main
else
  echo "📂 Cloning project..."
  git clone "$REPO" "$APP_DIR"
  cd "$APP_DIR"
fi

# Step 2: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 3: Run tests
echo "🧪 Running tests..."
npm test

echo "✅ Deployment completed successfully!"

 ```
👉 This script:

1. Updates repo (or clones first time)

2. Installs dependencies

3. Runs tests
 
 ### Logging

  ```bash 
echo "📝 Logging..."
LOGFILE="/var/log/deploy.log"
exec > >(tee -i $LOGFILE)
exec 2>&1
```
- `tee` → writes output both to terminal and log file

- `exec > >(tee -i $LOGFILE)` → writes output both to terminal and log file

- `exec 2>&1` → writes errors to log file

Now every echo/error is saved into `deploy.log`

 
 ## Interactive Menu
 

  ```bash 
#!/bin/bash
echo "📝 Interactive Menu"
echo "1. Deploy"
echo "2. Undeploy"
echo "3. Exit"
read -p "Enter your choice: " choice
case $choice in
  1) echo "Deploying..." ;;
  2) echo "Undeploying..." ;;
  3) echo "Exiting..." ;;
  *) echo "Invalid choice" ;;
esac
 ```
 

  ```bash 
 ```
 

  ```bash 
 ```
 