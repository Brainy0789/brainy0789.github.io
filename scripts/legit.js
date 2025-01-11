function updatePrice() {
    const priceElement = document.getElementById("price");
    
    // Generate a random length between 5 and 20
    const length = Math.floor(Math.random() * 16) + 5;
    
    // Generate a random number string with the specified length
    let randomPrice = '';
    for (let i = 0; i < length; i++) {
        randomPrice += Math.floor(Math.random() * 10); // Append random digits 0-9
    }

    priceElement.textContent = randomPrice;
}

setInterval(updatePrice, Math.random() * 100); // Update every second
