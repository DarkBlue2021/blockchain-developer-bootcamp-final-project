/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */

const MyHomeEnergy = artifacts.require("MyHomeEnergy");

/* Have at least five unit tests for your smart contract(s) that pass.
 * In the code, include a sentence or two explaining what the tests 
 * are covering their expected behavior. 
*/

contract("MyHomeEnergy", function (accounts) {

  // Test 0: Contract has been deployed. 
  it("should assert true", async function () {
    await MyHomeEnergy.deployed();
    return assert.isTrue(true);
  });

  // Test 1:
  describe("Test 1", () => {
    it ("has an initial value of 0", async () => {
      // Get subject
      const ssInstance = await MyHomeEnergy.deployed();
      // Verify is has an initial value of 0
      const billData = await ssInstance.getBillData.call();
      assert.equal(billData, 0, "Initial state should be zero");
     }) 
  })

   // Test 2:
   describe("Test 2", () => {
     it ("should store a new value 42", async () =>{
        const ssInstance = await MyHomeEnergy.deployed();
        // Change the number ! 
        await ssInstance.setBillData(42, { from: accounts[0] });
        const billData = await ssInstance.getBillData.call();
        assert.equal(billData, 42, `42 was not bill !`)
     })
   })

   // Test 3: 
   describe("Test 3", () => {
      it("should not let someone else change the variable", async() => {
        const [owner, badjoe] = accounts;
        const ssInstance = await MyHomeEnergy.new(42, {from:owner});
        try{
          await ssInstance.setBillData(22, {from: badjoe});
        } catch (err){}
        const balance = await web3.eth.getBalance(accounts[1]);
        console.log(balance)
        const billData = await ssInstance.getBillData.call();
        assert.equal(billData, 42, 'bill data was not changed')
      })
   })

    // Test 4: 
    describe("Test 4 - TO DO !!!", () => {
      it("should have sufficient funds to pay bills", async() => {
        const [owner, badjoe] = accounts;
        const ssInstance = await MyHomeEnergy.new(42, {from:owner});
        try{
          await ssInstance.setBillData(22, {from: badjoe});
        } catch (err){}
        const balance = await web3.eth.getBalance(accounts[1]);
        console.log(balance)
        const billData = await ssInstance.getBillData.call();
        assert.equal(billData, 42, 'bill data was not changed')
      })
   })

});
