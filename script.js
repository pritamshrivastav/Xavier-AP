document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('searchButton');
  const addressInput = document.getElementById('addressInput');
  
  button.addEventListener('click', () => {
    const address = addressInput.value.trim();
    if (address === '') {
      alert('Please enter your address to search.');
    } else {
      alert(`Searching for salons near ${address}...`);
    }
  });
});
