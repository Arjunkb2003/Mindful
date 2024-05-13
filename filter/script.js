    const genreSelect = document.querySelector(".select");
    const cards = document.querySelectorAll(".card");

    genreSelect.addEventListener("change", function() {
        const selectedGenre = genreSelect.value;
        cards.forEach(card => {
            const genre = card.querySelector("p").innerText.split(":")[1].trim();
            if (selectedGenre === "All" || genre === selectedGenre) {
                card.style.display = "block"; 
            } else {
                card.style.display = "none"; 
            }
        });
    });