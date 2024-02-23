var UserProfile = (function () {
  var id = "";
  var panCardNumber = "";
  var nationalInsuranceNumber = "";
  var firstName = "";
  var lastName = "";
  var postalAddress = "";
  var emailAddress = "";
  var dateOfBirth = "";

  var getId = () => {
    return id;
  };

  var setId = (cust_id) => {
    id = cust_id;
  };

  var getPanCardNumber = () => {
    return panCardNumber;
  };

  var setPanCardNumber = (pancard_number) => {
    panCardNumber = pancard_number;
  };

  var getNationalInsuranceNumber = () => {
    return nationalInsuranceNumber;
  };

  var setNationalInsuranceNumber = (national_insurance_number) => {
    nationalInsuranceNumber = national_insurance_number;
  };

  var getFirstName = () => {
    return firstName;
  };

  var setFirstName = (first_name) => {
    firstName = first_name;
  };

  var getLastName = () => {
    return lastName;
  };

  var setLastName = (last_name) => {
    lastName = last_name;
  };

  var getPostalAddress = () => {
    return postalAddress;
  };

  var setPostalAddress = (postal_address) => {
    postalAddress = postal_address;
  };

  var getEmailAddress = () => {
    return emailAddress;
  };

  var setEmailAddress = (email_address) => {
    emailAddress = email_address;
  };

  var getDateOfBirth = () => {
    return dateOfBirth;
  };

  var setDateOfBirth = (date_of_birth) => {
    dateOfBirth = date_of_birth;
  };

  return {
    getId: getId,
    setId: setId,
    getPanCardNumber: getPanCardNumber,
    setPanCardNumber: setPanCardNumber,
    getNationalInsuranceNumber: getNationalInsuranceNumber,
    setNationalInsuranceNumber: setNationalInsuranceNumber,
    getFirstName: getFirstName,
    setFirstName: setFirstName,
    getLastName: getLastName,
    setLastName: setLastName,
    getPostalAddress: getPostalAddress,
    setPostalAddress: setPostalAddress,
    getEmailAddress: getEmailAddress,
    setEmailAddress: setEmailAddress,
    getDateOfBirth: getDateOfBirth,
    setDateOfBirth: setDateOfBirth,
  };
})();

export default UserProfile;
