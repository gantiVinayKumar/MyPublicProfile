

        let currentIndex = 0;

        function moveCarousel(step) {
            const items = document.querySelectorAll("#carousel-content .carousel-item");
            const totalItems = items.length;
            currentIndex += step;
            if (currentIndex < 0) currentIndex = totalItems - 1;
            if (currentIndex >= totalItems) currentIndex = 0;
            const carouselContent = document.getElementById("carousel-content");
            carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function moveWaterParkCarousel(step) {
            const items = document.querySelectorAll("#carousel-waterparks .carousel-item");
            const totalItems = items.length;
            currentIndex += step;
            if (currentIndex < 0) currentIndex = totalItems - 1;
            if (currentIndex >= totalItems) currentIndex = 0;
            const carouselContent = document.getElementById("carousel-waterparks");
            carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    