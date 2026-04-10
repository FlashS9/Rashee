let cart = [];

function addToCart() {
    const select = document.getElementById('itemSelect');
    const qty = parseInt(document.getElementById('qtyInput').value);
    const text = select.options[select.selectedIndex].text;
    const price = parseFloat(select.options[select.selectedIndex].getAttribute('data-price'));

    if (!select.value) return alert("Select an item");

    cart.push({ text, price, qty, total: price * qty });
    renderTable();
}

function renderTable() {
    const body = document.querySelector('#previewTable tbody');
    body.innerHTML = cart.map(i => `
        <tr>
            <td>${i.text}</td>
            <td>$${i.price}</td>
            <td>${i.qty}</td>
            <td>$${i.total}</td>
        </tr>
    `).join('');
}

function printInvoice() {
    if (cart.length === 0) return alert("No items added.");

    const subtotal = cart.reduce((sum, i) => sum + i.total, 0);
    const tax = subtotal * 0.08; // 8% Tax
    const total = subtotal + tax;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Invoice - ABS Computer</title>
            <style>
                body { font-family: sans-serif; margin: 0; display: flex; min-height: 100vh; }
                .red-bar { width: 40px; background: #d32f2f; height: 100vh; position: fixed; left: 0; top: 0; }
                .content { margin-left: 80px; padding: 60px; width: 100%; }
                header h1 { font-size: 42px; margin: 0; color: #1a1a1a; letter-spacing: 1px; }
                .brand-info { display: flex; justify-content: space-between; margin-top: 40px; color: #d32f2f; font-weight: bold; }
                .info-box { display: flex; border: 1px solid #ddd; margin: 30px 0; }
                .info-item { flex: 1; padding: 20px; border-right: 1px solid #ddd; }
                .info-item:last-child { border-right: none; }
                .label { color: #d32f2f; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
                .val { font-size: 24px; font-weight: bold; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th { background: #d32f2f; color: white; padding: 12px; text-align: left; }
                td { padding: 12px; border-bottom: 1px solid #eee; }
                .total-area { float: right; margin-top: 40px; text-align: right; width: 300px; }
                .total-row { display: flex; justify-content: space-between; padding: 5px 0; }
                .grand-total { font-size: 28px; font-weight: bold; border-top: 2px solid #333; margin-top: 10px; padding-top: 10px; }
                .footer { margin-top: 100px; border-top: 1px solid #eee; padding-top: 20px; display: flex; justify-content: space-between; align-items: center; }
            </style>
        </head>
        <body>
            <div class="red-bar"></div>
            <div class="content">
                <header><h1>COMPUTER INVOICE</h1></header>
                <div class="brand-info">
                    <div>ABS COMPUTER<br>Rockhampton, Fort Worth, Texas</div>
                    <div>SERVICE RECEIPT<br>#${Math.floor(Math.random()*10000)}</div>
                </div>
                <div class="info-box">
                    <div class="info-item"><div class="label">Invoice Date</div><div class="val">${new Date().toLocaleDateString()}</div></div>
                    <div class="info-item"><div class="label">Amount Due</div><div class="val">$${total.toFixed(2)}</div></div>
                </div>
                <table>
                    <thead><tr><th>ITEM</th><th>DESCRIPTION</th><th>PRICE</th></tr></thead>
                    <tbody>
                        ${cart.map(i => `<tr><td>${i.text}</td><td>Qty: ${i.qty}</td><td>$${i.total.toFixed(2)}</td></tr>`).join('')}
                    </tbody>
                </table>
                <div class="total-area">
                    <div class="total-row"><span>SUB TOTAL</span><span>$${subtotal.toFixed(2)}</span></div>
                    <div class="total-row"><span>TAX (8%)</span><span>$${tax.toFixed(2)}</span></div>
                    <div class="total-row grand-total"><span>TOTAL</span><span>$${total.toFixed(2)}</span></div>
                </div>
                <div class="footer">
                    <div>For support: support@abscomputer.com</div>
                    <div style="font-weight:bold;">ABS COMPUTER TEXAS</div>
                </div>
            </div>
            <script>window.onload = () => { window.print(); window.close(); }</script>
        </body>
        </html>
    `);
}
