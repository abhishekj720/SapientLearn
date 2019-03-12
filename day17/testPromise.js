// describe('Unit Testing promises',function(){
//     beforeEach(function(){
//         userList = ['abc123','xyz'];
//     })
//     test('should the user is existing',function(assert){

//     })
// });
//QUnit does not support describe

// 1.user is exiting
// 2. user not existing in db
// 3. userList is null,handle using try catch

test('should the user is existing',function(assert){
  userList = ['abc123','xyz'];

  assert.expect(1);

  let checkUser = isAuthorizedPromise('abc123');
  
 

  return checkUser.then((result)=>{
      assert.equal(result,true);
  })

})

test('should the user is not  existing',function(assert){
    userList = ['abc123','xyz'];
  
    assert.expect(1);
  
    let checkUser = isAuthorizedPromise('abcd123');
    
   
  
    return checkUser.then((result)=>{
        assert.equal(result,false);
    })
  
  })

  
test('When the userList empty',function(assert){
    userList =null;
  
    // assert.expect(1);   passes number of arguments to change
  
    let checkUser = isAuthorizedPromise('abcd123');
    
   
  
    return checkUser.then((result)=>{
        assert.equal(result,true);
    })
  
  })

