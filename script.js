// Fungsi untuk meng-update biodata diri dari form input
function updateBiodata() {
    const name = document.getElementById('nameInput').value;
    const age = document.getElementById('ageInput').value;
    const address = document.getElementById('addressInput').value;
    const hobby = document.getElementById('hobbyInput').value;
  
    document.getElementById('name').textContent = `Nama: ${name}`;
    document.getElementById('age').textContent = `Usia: ${age} tahun`;
    document.getElementById('address').textContent = `Alamat: ${address}`;
    document.getElementById('hobby').textContent = `Hobi: ${hobby}`;
  }
  