// script.js
let cart = [];

function addItem() {
    const select = document.getElementById('productSelect');
    const qty = parseInt(document.getElementById('quantity').value);
    const itemName = select.value;
    const price = parseFloat(select.options[select.selectedIndex].getAttribute('data-price'));

    if (itemName === "0") return alert("Please select an item");

    const total = price * qty;
    cart.push({ itemName, price, qty, total });
    updateTable();
}

function updateTable() {
    const tbody = document.querySelector('#cartTable tbody');
    tbody.innerHTML = '';
    cart.forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td>${item.itemName}</td>
                <td>$${item.price}</td>
                <td>${item.qty}</td>
                <td>$${item.total}</td>
            </tr>`;
    });
}

function generateInvoice() {
    if (cart.length === 0) return alert("Add items first!");

    let grandTotal = cart.reduce((sum, item) => sum + item.total, 0);
    
    // Create professional Letterhead Overlay for Printing
    const invoiceWindow = window.open('', '_blank');
    invoiceWindow.document.write(`
        <html>
        <head>
            <title>Invoice - ABS Computer</title>
            <style>
                body { font-family: sans-serif; padding: 40px; color: #333; }
                .letterhead { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
                .letterhead h1 { margin: 0; color: #0056b3; }
                .details { display: flex; justify-content: space-between; margin-bottom: 40px; }
                table { width: 100%; border-collapse: collapse; }
                th { background: #f4f4f4; }
                th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
                .total-section { text-align: right; margin-top: 30px; font-size: 1.2em; font-weight: bold; }
                .footer { margin-top: 50px; font-size: 0.8em; text-align: center; color: #777; }
            </style>
        </head>
        <body>
            <div class="letterhead">
                <h1>ABS COMPUTER</h1>
                <p>Rockhampton, Fort Worth, Texas</p>
                <p>Official Store Invoice | Date: ${new Date().toLocaleDateString()}</p>
            </div>
            <div class="details">
                <div><strong>Bill To:</strong><br>Valued Customer</div>
                <div><strong>Invoice #:</strong><br>${Math.floor(Math.random() * 100000)}</div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Item Description</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    ${cart.map(i => `<tr><td>${i.itemName}</td><td>$${i.price}</td><td>${i.qty}</td><td>$${i.total}</td></tr>`).join('')}
                </tbody>
            </table>
            <div class="total-section">Grand Total: $${grandTotal.toFixed(2)}</div>
            <div class="footer">Thank you for choosing ABS Computer. All sales are final.</div>
            <script>window.onload = function() { window.print(); }</script>
        </body>
        </html>
    `);
    invoiceWindow.document.close();
}
