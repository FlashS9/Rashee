function generateInvoice() {
  const customer = {
    name: document.getElementById("customerName").value,
    contact: document.getElementById("customerContact").value
  };

  const items = [
    { name: "Keyboard", price: 20, qty: document.getElementById("keyboard").value },
    { name: "Mouse", price: 10, qty: document.getElementById("mouse").value },
    { name: "Monitor", price: 150, qty: document.getElementById("monitor").value },
    { name: "USB Drive", price: 25, qty: document.getElementById("usb").value }
  ];

  const selected = items.filter(item => item.qty > 0);

  if (!customer.name) {
    alert("Enter customer name");
    return;
  }

  if (selected.length === 0) {
    alert("Select at least one item");
    return;
  }

  localStorage.setItem("invoice", JSON.stringify(selected));
  localStorage.setItem("customer", JSON.stringify(customer));

  window.location.href = "invoice.html";
}
