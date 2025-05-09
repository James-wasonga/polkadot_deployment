// scripts/set-value.js
async function main() {
    // Create instance of the Box contract
    const Box = await ethers.getContractFactory('Box');
  
    // Connect the instance to the deployed contract
    const box = await Box.attach('0x25Cc3848b2f6fd0Fc7D180BfF67274d56775b39f');
  
    // Store a new value
    await box.store(2);
  
    // Retrieve the value
    const value = await box.retrieve();
    console.log(`The new value is: ${value}`);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });