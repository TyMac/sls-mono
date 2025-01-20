const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your project name: ", (name) => {
  // Update package.json files
  const rootPackagePath = "./package.json";
  const backendPackagePath = "./sls/package.json";
  const frontendPackagePath = "./fe/package.json";

  [rootPackagePath, backendPackagePath, frontendPackagePath].forEach((filePath) => {
    const packageData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    packageData.name = name;
    fs.writeFileSync(filePath, JSON.stringify(packageData, null, 2));
  });

  console.log(`\nProject setup complete for '${name}'!\n`);
  rl.close();
});
