// // Display Places Dynamically
// function displayPlaces(places) {
//     const placesList = document.getElementById("places-list");
//     if (placesList) {
//       placesList.innerHTML="";
      
//     }

//     console.log(places)

//     let row;
//     places.forEach((place, index) => {
      
//       if (index % 5 === 0) {
//       row = document.createElement("div");
//       row.className = "child-row";
//       placesList.appendChild(row);
//       }

//       const column = document.createElement("div");
//       column.className = "child-row-col";

//             // Create the main link element
//           const link = document.createElement("a");
//           link.className = "link-wrapper";
//           link.href = "./place.html";

//           // Create the place card container
//           const placeCard = document.createElement("div");
//           placeCard.className = "place-card";

//           // Create the image wrapper
//           const imageWrapper = document.createElement("div");
//           imageWrapper.className = "image-wrapper";

//           // Create the place image
//           const placeImage = document.createElement("div");
//           placeImage.className = "place-image";
//           placeImage.innerHTML = "Image Here";

//           // Append the place image to the image wrapper
//           imageWrapper.appendChild(placeImage);

//           // Create the card content
//           const cardContent = document.createElement("div");
//           cardContent.className = "card-content";

//           // Create and append the name heading
//           const nameHeading = document.createElement("h3");
//           nameHeading.className = "card-content-text";
//           nameHeading.textContent = place.id;
//           cardContent.appendChild(nameHeading);

//           // Create and append the price paragraph
//           const priceParagraph = document.createElement("p");
//           priceParagraph.className = "card-content-text";
//           priceParagraph.textContent = `Price Per Night: $${place.price_per_night}`;
//           cardContent.appendChild(priceParagraph);

//           // Create and append the location paragraph
//           const locationParagraph = document.createElement("p");
//           locationParagraph.className = "card-content-text";
//           locationParagraph.textContent = `Location: ${place.city_name}`;
//           cardContent.appendChild(locationParagraph);

//           // Append the image wrapper and card content to the place card
//           placeCard.appendChild(imageWrapper);
//           placeCard.appendChild(cardContent);

//           // Append the place card to the link
//           link.appendChild(placeCard);

//           column.appendChild(link);


//       row.appendChild(column);
//     });

//   }