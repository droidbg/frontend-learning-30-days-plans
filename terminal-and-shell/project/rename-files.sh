#!/bin/bash
# rename-files.sh - rename all files to lowercase and replace spaces with underscores

# Directory to rename files in (default current directory)
DIR=${1:-.}

echo "Renaming files in $DIR..."

for file in "$DIR"/*; do
  if [ -f "$file" ]; then
    # Get filename without path
    filename=$(basename "$file")
    # Convert to lowercase and replace spaces with underscores
    newname=$(echo "$filename" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
    # Rename only if different
    if [ "$filename" != "$newname" ]; then
      mv -v "$file" "$DIR/$newname"
    fi
  fi
done

echo "Files renamed successfully!"


### How to Run:
# chmod +x rename-files.sh
# ./rename-files.sh /path/to/target/folder