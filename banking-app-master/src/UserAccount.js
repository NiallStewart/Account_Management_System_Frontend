var UserAccount = (function () {
  var accountNumber = "";
  var customerId = "";
  var currentBalance = "";

  var getAccountNumber = () => {
    return accountNumber;
  };

  var setAccountNumber = (accountNo) => {
    accountNumber = accountNo;
  };

  var getCustomerId = () => {
    return customerId;
  };

  var setCustomerId = (id) => {
    customerId = id;
  };

  var getCurrentBalance = () => {
    return currentBalance;
  };

  var setCurrentBalance = (balance) => {
    currentBalance = balance;
  };

  return {
    getAccountNumber: getAccountNumber,
    setAccountNumber: setAccountNumber,
    getCustomerId: getCustomerId,
    setCustomerId: setCustomerId,
    getCurrentBalance: getCurrentBalance,
    setCurrentBalance: setCurrentBalance,
  };
})();

export default UserAccount;
