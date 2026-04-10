function generateInvoice() {
  const items = [
    { name: "Keyboard", price: 20, qty: document.getElementById("keyboard").value },
    { name: "Mouse", price: 10, qty: document.getElementById("mouse").value },
    { name: "Monitor", price: 150, qty: document.getElementById("monitor").value },
    { name: "USB Drive", price: 25, qty: document.getElementById("usb").value }
  ];

  const selected = items.filter(item => item.qty > 0);

  if (selected.length === 0) {
    alert("Please select at least one item");
    return;
  }

  localStorage.setItem("invoice", JSON.stringify(selected));
  window.location.href = "invoice.html";
}
