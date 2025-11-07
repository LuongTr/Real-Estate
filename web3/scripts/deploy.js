const hre = require("hardhat");

async function main() {
  console.log("Deploying MyContract to Polygon Amoy...");

  // Get the contract factory
  const MyContract = await hre.ethers.getContractFactory("RealEstate");

  // Deploy the contract
  const myContract = await MyContract.deploy();

  // Wait for deployment to finish
  await myContract.deployed();

  console.log("✅ Contract deployed successfully!");
  console.log("Contract address:", myContract.address);
  console.log(
    "\n📝 IMPORTANT: Copy this address to your context/index.js file"
  );
  console.log("\nVerify on PolygonScan Amoy:");
  console.log(`https://amoy.polygonscan.com/address/${myContract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
