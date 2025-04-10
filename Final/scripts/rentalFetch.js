fetch('data/rentals.json')
  .then(response => response.json())
  .then(data => {
      const rentalOptionsDiv = document.getElementById('rental-options');
      const rentalPricesTable = document.querySelector('#rental-prices tbody');

      // Populate rental options with images and descriptions
      data.rentals.forEach(rental => {
          const rentalDiv = document.createElement('div');
          rentalDiv.classList.add('rental');

          const img = document.createElement('img');
          img.src = rental.image;
          img.alt = rental.type;

          const description = document.createElement('p');
          description.textContent = rental.description;

          rentalDiv.appendChild(img);
          rentalDiv.appendChild(description);
          rentalOptionsDiv.appendChild(rentalDiv);

          // Populate rental prices table
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${rental.type}</td>
              <td>${rental.pricePerDay}</td>
              <td>${rental.pricePerWeek}</td>
          `;
          rentalPricesTable.appendChild(row);
      });
  })
  .catch(error => console.error('Error loading rental data:', error));