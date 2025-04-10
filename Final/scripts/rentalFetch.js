document.addEventListener("DOMContentLoaded", () => {
    fetch("data/rentals.json")
      .then((response) => response.json())
      .then((data) => {
        const tableBody = document.querySelector("#rental-table");
  
        data.forEach((rental) => {
          const row = document.createElement("tr");
  
          row.innerHTML = `
            <td>${rental.type}</td>
            <td>${rental.maxPersons}</td>
            <td>$${rental.reservationHalf}</td>
            <td>$${rental.reservationFull}</td>
            <td>$${rental.walkInHalf}</td>
            <td>$${rental.walkInFull}</td>
          `;
  
          tableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error loading rental data:", error));
  });
  