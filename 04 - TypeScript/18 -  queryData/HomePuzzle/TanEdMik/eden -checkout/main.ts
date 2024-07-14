function confirmOrder() {
  const fullName = document.getElementById("full-name").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zip = document.getElementById("zip").value;
  const country = document.getElementById("country").value;
  const cardNumber = document.getElementById("card-number").value;
  const expiryDate = document.getElementById("expiry-date").value;
  const cvv = document.getElementById("cvv").value;

  if (
    fullName &&
    address &&
    city &&
    state &&
    zip &&
    country &&
    cardNumber &&
    expiryDate &&
    cvv
  ) {
    alert("Order confirmed!");
  } else {
    alert("Please fill in all the fields.");
  }
}
