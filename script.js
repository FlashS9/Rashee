function generatePrint() {
  const printArea = document.getElementById("printArea");

  printArea.innerHTML = `
    <div class="print-box">
      <div class="print-grid">

        <div class="print-section bold">
          <h3>From</h3>
          <p>${s_name.value}</p>
          <p>${s_addr1.value}</p>
          <p>${s_addr2.value}</p>
          <br>
          <p>${s_phone1.value}</p>
          <p>${s_phone2.value}</p>
        </div>

        <div class="print-section">
          <h3>To</h3>
          <p>${r_name.value}</p>
          <p>${r_addr1.value}</p>
          <p>${r_addr2.value}</p>
          <br>
          <p>${r_phone1.value}</p>
          <p>${r_phone2.value}</p>
        </div>

      </div>

      <div class="bottom-box"></div>
    </div>
  `;

  window.print();
}
