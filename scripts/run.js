const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Bumrah", "Starc", "Archer"],       // Names
      ["https://tse4.mm.bing.net/th?id=OIP.pCpDfEeJewM8-nsHy6adYAHaFH&pid=Api&P=0&w=263&h=181", // Images
      "https://st3.cricketcountry.com/wp-content/uploads/2020/08/Mitchell-Starc.jpg", 
      "https://tse2.mm.bing.net/th?id=OIP.wcnv12o5Z-QkrYZj8KlhqwHaEK&pid=Api&P=0&w=275&h=154"],
      [100, 200, 300],                    // HP values
      [100, 50, 25],
      "Virat Kohli",
      "https://tse2.mm.bing.net/th?id=OIP.gxyDcWC3JUQ-NLKRtbGAKAHaFj&pid=Api&P=0&w=224&h=168",
      10000,
      50                  // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
// We only have three characters.
// an NFT w/ the character at index 2 of our array.
txn = await gameContract.mintCharacterNFT(2);
await txn.wait();
txn = await gameContract.attackBoss();
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();

// Get the value of the NFT's URI.

  };



  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();