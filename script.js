function generatePrint() {
  const printArea = document.getElementById("printArea");

  // Get values safely
  const s_name = document.getElementById("s_name").value;
  const s_addr1 = document.getElementById("s_addr1").value;
  const s_addr2 = document.getElementById("s_addr2").value;
  const s_phone1 = document.getElementById("s_phone1").value;
  const s_phone2 = document.getElementById("s_phone2").value;

  const r_name = document.getElementById("r_name").value;
  const r_addr1 = document.getElementById("r_addr1").value;
  const r_addr2 = document.getElementById("r_addr2").value;
  const r_phone1 = document.getElementById("r_phone1").value;
  const r_phone2 = document.getElementById("r_phone2").value;

  // Inject HTML
  printArea.innerHTML = `
    <div class="print-box">
      <div class="print-grid">

        <div class="print-section bold">
          <h3>From</h3>
          <p>${s_name}</p>
          <p>${s_addr1}</p>
          <p>${s_addr2}</p>
          <br>
          <p>${s_phone1}</p>
          <p>${s_phone2}</p>
        </div>

        <div class="print-section">
          <h3>To</h3>
          <p>${r_name}</p>
          <p>${r_addr1}</p>
          <p>${r_addr2}</p>
          <br>
          <p>${r_phone1}</p>
          <p>${r_phone2}</p>
        </div>

      </div>

      <div class="bottom-box"></div>
    </div>
  `;

  // Small delay ensures DOM updates before printing
  setTimeout(() => {
    window.print();
  }, 300);
}
