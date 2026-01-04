let grandTotal = 0;

function addItem() {
    let item = document.getElementById("item").value;
    let price = Number(document.getElementById("price").value);
    let qty = Number(document.getElementById("qty").value);

    if (item === "" || price <= 0 || qty <= 0) {
        alert("Please enter valid item, price and quantity");
        return;
    }

    let itemTotal = price * qty;
    grandTotal = grandTotal + itemTotal;

    let row = `
        <tr>
            <td>${item}</td>
            <td>${price}</td>
            <td>${qty}</td>
            <td>${itemTotal}</td>
        </tr>
    `;

    document.getElementById("billBody").innerHTML += row;
    document.getElementById("total").innerText = grandTotal;

    // Clear inputs
    document.getElementById("item").value = "";
    document.getElementById("price").value = "";
    document.getElementById("qty").value = "";
}
function generateBill() {
    let name = document.getElementById("customerName").value;
    let phone = document.getElementById("customerPhone").value;

    if (name === "" || phone === "") {
        alert("Please enter customer details");
        return;
    }

    let billWindow = window.open("", "Bill");

    let billHTML = `
        <h2>🧾 BILL INVOICE</h2>
        <p><b>Customer:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Date:</b> ${new Date().toLocaleDateString()}</p>
        <hr>
        <table border="1" cellpadding="8" width="100%">
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
            </tr>
            ${document.getElementById("billBody").innerHTML}
        </table>
        <h3>Total Amount: ₹ ${grandTotal}</h3>
        <p>Thank you for your purchase!</p>
        <button onclick="window.print()">Print / Save PDF</button>
    `;

    billWindow.document.write(billHTML);
    billWindow.document.close();
}
