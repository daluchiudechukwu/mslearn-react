# Navigate to the project directory
Set-Location -Path "code/0-starter"

# Install npm packages
npm install

# Build the project
npm run build

# Copy the build output to the app service root directory
Copy-Item -Path "build/*" -Destination "D:\home\site\wwwroot" -Recurse -Force
