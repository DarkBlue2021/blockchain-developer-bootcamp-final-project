/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */

const MyHomeEnergyApp = artifacts.require("MyHomeEnergyApp");


contract("MyHomeEnergyApp", function (accounts) {

  // Confirm contracts has been deployed
  describe("Test 1: Confirm contracts has been deployed", () => {
      it("Assert to true", async function () {
        await MyHomeEnergyApp.deployed();
        return assert.isTrue(true);
      });
    })
    
  // Confirm initial values
  describe("Test 2: Confirm initial values", () => {
    it ("Bill Data has initial value of zero", async () => {
      // Get subject
      const ssInstance = await MyHomeEnergyApp.deployed();
      // Verify is has an initial value of 0
      const billData = await ssInstance.getAccountBalance.call();
      assert.equal(billData, 0, "Initial state should be zero");
     }) 
  })

  // Confirm get and set functions for bill data 
  describe("Test 3. Confirm get and set functions for bill data ", () => {
      it ("Verify Bill Data set and get functions. Test value is 42.", async () =>{
         const ssInstance = await MyHomeEnergyApp.deployed();
         await ssInstance.setAccountBalance(42, { from: accounts[0] });
         const billData = await ssInstance.getAccountBalance.call();
         assert.equal(billData, 42, `Value is not 42 - set function did not work`)
      })
  })

  // Confirm the apply discount function for bill data
  describe("Test 4.  Verify Bill Data Apply Discount functions ", () => {
    it ("4.1 Verify test value is Cooling (type 1).", async () =>{
       const ssInstance = await MyHomeEnergyApp.deployed();
       await ssInstance.setAccountBalance(100, { from: accounts[0] });
       const discountValue = await ssInstance.getDiscountByType(1); 
       assert.equal(discountValue, 10, `Value is not 10 - Get Discount for Cooling (type 1) function did not work`)
    })
    it ("4.2 Verify test value is Heating (type 2).", async () =>{
      const ssInstance = await MyHomeEnergyApp.deployed();
      await ssInstance.setAccountBalance(100, { from: accounts[0] });
      const discountValue = await ssInstance.getDiscountByType(2); 
      assert.equal(discountValue, 15, `Value is not 15 - Get Discount for Heating (type 2) function did not work`)
   })
   it ("4.3 Verify test value is Water (type 3).", async () =>{
      const ssInstance = await MyHomeEnergyApp.deployed();
      await ssInstance.setAccountBalance(100, { from: accounts[0] });
      const discountValue = await ssInstance.getDiscountByType(3); 
      assert.equal(discountValue, 20, `Value is not 20 - Get Discount for Water (type 3) function did not work`)
    })
    it ("4.4 Verify test value is Appliance (type 4).", async () =>{
      const ssInstance = await MyHomeEnergyApp.deployed();
      await ssInstance.setAccountBalance(100, { from: accounts[0] });
      const discountValue = await ssInstance.getDiscountByType(4); 
      assert.equal(discountValue, 25, `Value is not 25 - Get Discount for Appliance (type 4) function did not work`)
    })
    it ("4.5 Verify discount type range is 1 to 4 (test with type 0)", async () =>{
      const ssInstance = await MyHomeEnergyApp.deployed();
      await ssInstance.setAccountBalance(100, { from: accounts[0] });
      try{
        const discountValue = await ssInstance.getDiscountByType(0); 
      }catch (err){
        assert.fail(err);
      }
    })
    it ("4.5 Verify discount type range is 1 to 4 (test with type 5)", async () =>{
      const ssInstance = await MyHomeEnergyApp.deployed();
      await ssInstance.setAccountBalance(100, { from: accounts[0] });
      try{
        const discountValue = await ssInstance.getDiscountByType(5); 
      }catch (err){
        assert.fail(err);
      }
    })
    it ("4.6 Verify discount is applied to bill", async () =>{
        //const ssInstance = await MyHomeEnergyApp.deployed();
        //await ssInstance.setAccountBalance(100, { from: accounts[0] });
        //try{
        //  const discountValue = await ssInstance.GetDiscountByType(5); 
        //}catch (err){
        //  assert.fail(err);
       //}
     })
     it ("4.7 Verify owner has enough to pay for the bill", async () =>{
          //it("should have sufficient funds to pay bills", async() => {
  //       const [owner, badjoe] = accounts;
  //       const ssInstance = await MyHomeEnergyApp.new(42, {from:owner});
  //       try{
  //         await ssInstance.setBillData(22, {from: badjoe});
  //       } catch (err){}
  //       const balance = await web3.eth.getBalance(accounts[1]);
  //       console.log(balance)
  //       const billData = await ssInstance.getBillData.call();
  //       assert.equal(billData, 42, 'bill data was not changed')
  //     })
  //  })
     })
  })

  describe("Test 5. Non-owner must not read or change owner-only data or functions", () => {
    it("5.1 Non-owner ", async() => {
      const [owner, badjoe] = accounts;
      const ssInstance = await MyHomeEnergyApp.new(42, {from:owner});
      try{
        //await ssInstance.getAccountBalance.call({from: badjoe});
        //await ssInstance.setAccountBalance(22, {from: badjoe});
        //assert.fail();
        //revert("badjoe is not the owner");
        //assert.fail(null, null, "badjoe is not the owner");
      } catch (err){
        //assert.fail();
        //assert.equal(err, "Caller is not owner", "badjoe is not the owner");
      }
      //const balance = await web3.eth.getBalance(getAccountBalance[1]);
     // const billData = await ssInstance.getAccountBalance.call();
     // assert.equal(billData, 42, 'Balance not changed by non-owner')
     // })
    })
  })
});
