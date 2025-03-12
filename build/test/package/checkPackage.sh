#!/bin/bash

# Store the base directory of the script dynamically
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

runNodeTest() {
    printf "\n\e[34m***********\n"
    printf "* Node.js *\n"
    printf "***********\e[0m\n\n"
    
    cd "$BASE_DIR/node" || { echo "Directory not found"; exit 1; }
    rm -rf node_modules
    npm run node-test || { echo "Node test failed"; exit 1; }
}

runWebTest() {
    printf "\n\e[34m*******\n"
    printf "* Web *\n"
    printf "*******\e[0m\n\n"
  
    cd "$BASE_DIR/web" || { echo "Directory not found"; exit 1; }
    rm -rf node_modules
    npm install || { echo "npm install failed"; exit 1; }
    npm run web-test || { echo "Web test failed"; exit 1; }
    printf "\n\e[33m[?] OK\e[0m (Open 'index.html' in a browser to view results)\n"
}

# Ensure we always start from the base directory
cd "$BASE_DIR" || { echo "Failed to navigate to base directory"; exit 1; }

echo "Checking compatibility..."
runNodeTest
runWebTest
echo ""