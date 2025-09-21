#!/bin/bash
# echo "📝 Interactive Menu"
# echo "1. Deploy"
# echo "2. Undeploy"
# echo "3. Exit"
# read -p "Enter your choice: " choice
# case $choice in
#   1) echo "Deploying..." ;;
#   2) echo "Undeploying..." ;;
#   3) echo "Exiting..." ;;
#   *) echo "Invalid choice" ;;
# esac

while true; do
  echo "=== Admin Menu ==="
  echo "1. Check disk usage"
  echo "2. Show running processes"
  echo "3. Clean temporary files"
  echo "4. Exit"
  read -p "Choose an option: " choice

  case $choice in
    1) df -h ;;
    2) ps aux ;;
    3) ./clean_temp.sh ;;
    4) echo "Bye!"; exit 0 ;;
    *) echo "Invalid option!" ;;
  esac
done