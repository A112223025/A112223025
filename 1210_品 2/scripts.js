let currentIndex = 0; // 初始索引
    const slides = document.querySelectorAll('.hero-slider img'); // 獲取所有圖片
    const totalSlides = slides.length; // 圖片總數

    // 顯示當前圖片
    function showSlide(index) {
        // 先隱藏所有圖片
        slides.forEach(slide => slide.style.display = 'none');
        // 顯示當前圖片
        slides[index].style.display = 'block';
    }

    // 顯示下一張圖片
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; // 圖片索引循環
        showSlide(currentIndex);
    }

    // 顯示上一張圖片
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // 圖片索引循環
        showSlide(currentIndex);
    }

    // 初始化顯示第一張圖片
    showSlide(currentIndex);

// 自動輪播 (可選)
setInterval(nextSlide, 3000); // 每 5 秒切換一次
