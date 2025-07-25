<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Krishna Janmashtami</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    <script>
      // API Configuration - Inline to ensure it loads in all environments
      window.API_CONFIG = {
        baseUrl: window.location.origin,
        getApiUrl: function(endpoint) {
          return this.baseUrl + endpoint;
        }
      };
    </script>
    <style>
      /* CSS Reset - Remove default margins and padding */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }

      .hero-section {
        position: relative;
        width: 100%;
        height: 70vh;
        overflow: hidden;
      }

      /* Desktop height increase */
      @media (min-width: 769px) {
        .hero-section {
          height: 100vh;
        }
      }

      .slider-container {
        position: relative;
        width: 100%;
        height: 100%;
      }

      .slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0;
        transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .slide.active {
        opacity: 1;
      }

      .slide.fade-out {
        opacity: 0;
      }

      /* Navigation Arrows */
      .slider-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: none; /* Hidden */
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 10;
        font-size: 20px;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255, 255, 255, 0.3);
      }

      .slider-nav:hover {
        background: rgba(0, 0, 0, 0.7);
        transform: translateY(-50%) scale(1.1);
        border-color: rgba(255, 255, 255, 0.6);
      }

      .slider-nav.prev {
        left: 30px;
      }

      .slider-nav.next {
        right: 30px;
      }

      /* Slider Navigation Dots */
      .slider-dots {
        position: absolute;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        display: none; /* Hidden */
        gap: 12px;
        z-index: 10;
      }

      .dot {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        cursor: pointer;
        transition: all 0.3s ease;
        border: 2px solid rgba(255, 255, 255, 0.6);
        position: relative;
      }

      .dot.active {
        background: rgba(255, 255, 255, 0.9);
        transform: scale(1.3);
        border-color: rgba(255, 255, 255, 1);
      }

      .dot:hover {
        background: rgba(255, 255, 255, 0.7);
        transform: scale(1.1);
      }

      /* Slide Progress Indicator */
      .slide-progress {
        position: absolute;
        bottom: 60px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.3);
        height: 4px;
        width: 200px;
        border-radius: 2px;
        overflow: hidden;
        z-index: 10;
        display: none; /* Hidden */
      }

      .progress-bar {
        height: 100%;
        background: linear-gradient(90deg, #ffd700, #ffed4a);
        width: 0%;
        transition: width 0.1s linear;
        border-radius: 2px;
      }
      .hero-text {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        width: 90%;
        max-width: 1200px;
      }
      .hero-title {
        font-size: 3.5em;
        font-weight: bold;
        margin-bottom: 15px;
        letter-spacing: 3px;
        word-spacing: 8px;
      }
      .hero-subtitle {
        font-size: 2em;
        font-style: italic;
        letter-spacing: 2px;
        word-spacing: 6px;
      }
      .opulence-section {
        position: relative;
        width: 100%;
        min-height: 100vh;
        background: linear-gradient(135deg, #d4b896 0%, #c9a876 100%);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 50px;
        box-sizing: border-box;
      }
      .opulence-content {
        flex: 1;
        max-width: 50%;
        padding-right: 40px;
      }
      .opulence-title {
        font-size: 3em;
        font-weight: bold;
        color: #2c1810;
        margin-bottom: 30px;
        line-height: 1.2;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .opulence-text {
        font-size: 1.1em;
        color: #4a3426;
        line-height: 1.6;
        margin-bottom: 20px;
        text-align: justify;
      }
      .opulence-image {
        flex: 1;
        max-width: 45%;
        position: relative;
      }
      .opulence-image img {
        width: 100%;
        height: auto;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      }
      .decorative-rays {
        position: absolute;
        width: 100px;
        height: 100px;
        background: radial-gradient(
          circle,
          transparent 30%,
          #f4e6d1 31%,
          #f4e6d1 32%,
          transparent 33%
        );
        opacity: 0.3;
      }
      .rays-top-right {
        top: 20px;
        right: 20px;
        transform: rotate(45deg);
      }
      .rays-bottom-left {
        bottom: 20px;
        left: 20px;
        transform: rotate(225deg);
      }

      /* Tablet Responsive */
      @media (max-width: 1024px) {
        .hero-title {
          font-size: 3em;
          letter-spacing: 2px;
          word-spacing: 6px;
        }
        .hero-subtitle {
          font-size: 1.8em;
          letter-spacing: 1.5px;
          word-spacing: 5px;
        }
        .opulence-section {
          padding: 40px 30px;
        }
        .opulence-title {
          font-size: 2.5em;
          letter-spacing: 1px;
        }
        .opulence-text {
          font-size: 1em;
        }
        .opulence-content {
          padding-right: 30px;
        }
      }

      /* Mobile Responsive */
      @media screen and (max-width: 768px) {
        .hero-text {
          width: 95%;
          bottom: 30px;
        }
        .hero-title {
          font-size: 2.2em;
          letter-spacing: 1px;
          word-spacing: 4px;
          margin-bottom: 10px;
        }
        .hero-subtitle {
          font-size: 1.4em;
          letter-spacing: 1px;
          word-spacing: 3px;
        }
        .slider-dots {
          bottom: 80px;
          gap: 10px;
        }
        .dot {
          width: 12px;
          height: 12px;
        }
        .slider-nav {
          width: 50px;
          height: 50px;
          font-size: 16px;
        }
        .slider-nav.prev {
          left: 15px;
        }
        .slider-nav.next {
          right: 15px;
        }
        .slide-progress {
          width: 150px;
          bottom: 50px;
        }
        .opulence-section {
          flex-direction: column;
          padding: 30px 20px;
          text-align: center;
        }
        .opulence-content {
          max-width: 100%;
          padding-right: 0;
          margin-bottom: 30px;
        }
        .opulence-title {
          font-size: 2em;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }
        .opulence-text {
          font-size: 0.95em;
          text-align: left;
          margin-bottom: 15px;
        }
        .opulence-image {
          max-width: 90%;
        }
        .decorative-rays {
          width: 60px;
          height: 60px;
        }
        .rays-top-right {
          top: 10px;
          right: 10px;
        }
        .rays-bottom-left {
          bottom: 10px;
          left: 10px;
        }
      }

      /* Small Mobile */
      @media (max-width: 480px) {
        .hero-text {
          width: 98%;
          bottom: 20px;
        }
        .hero-title {
          font-size: 1.8em;
          letter-spacing: 0.5px;
          word-spacing: 2px;
          line-height: 1.2;
        }
        .hero-subtitle {
          font-size: 1.1em;
          letter-spacing: 0.5px;
          word-spacing: 2px;
        }
        .opulence-section {
          padding: 20px 15px;
        }
        .opulence-title {
          font-size: 1.6em;
          line-height: 1.3;
        }
        .opulence-text {
          font-size: 0.9em;
          line-height: 1.5;
        }
        .opulence-image {
          max-width: 95%;
        }
        .decorative-rays {
          display: none;
        }
      }

      /* Krishna Six Opulences Section */
      .krishna-opulences-section {
        position: relative;
        width: 100%;
        min-height: 100vh;
        background: linear-gradient(
          135deg,
          #2c1810 0%,
          #4a3426 50%,
          #1a0f0a 100%
        );
        padding: 80px 50px;
        box-sizing: border-box;
        text-align: center;
      }
      .krishna-main-title {
        font-size: 4em;
        font-weight: bold;
        color: #f4e6d1;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 3px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      .krishna-subtitle {
        font-size: 2.2em;
        color: #d4b896;
        margin-bottom: 50px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
      }
      .krishna-description {
        font-size: 1.3em;
        color: #c9a876;
        margin-bottom: 60px;
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.6;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .opulences-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 20px;
        max-width: 1400px;
        margin: 0 auto;
      }
      .opulence-card {
        position: relative;
        background: white;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
      }
      .opulence-card:hover {
        transform: translateY(-10px);
      }
      .opulence-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
      .opulence-label {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px;
        font-size: 1.2em;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      /* Responsive for Krishna Section */
      @media (max-width: 1200px) {
        .opulences-grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }
        .krishna-main-title {
          font-size: 3.5em;
        }
        .krishna-subtitle {
          font-size: 2em;
        }
      }

      @media (max-width: 768px) {
        .krishna-opulences-section {
          padding: 50px 20px;
        }
        .opulences-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .krishna-main-title {
          font-size: 2.5em;
          letter-spacing: 2px;
        }
        .krishna-subtitle {
          font-size: 1.6em;
          margin-bottom: 30px;
        }
        .krishna-description {
          font-size: 1.1em;
          margin-bottom: 40px;
        }
        .opulence-card img {
          height: 220px;
        }
        .opulence-label {
          font-size: 1em;
          padding: 10px;
        }
      }

      @media (max-width: 480px) {
        .krishna-opulences-section {
          padding: 30px 15px;
        }
        .opulences-grid {
          grid-template-columns: 1fr;
          gap: 15px;
        }
        .krishna-main-title {
          font-size: 2em;
          letter-spacing: 1px;
        }
        .krishna-subtitle {
          font-size: 1.3em;
        }
        .krishna-description {
          font-size: 1em;
          text-transform: none;
        }
        .opulence-card img {
          height: 250px;
        }
      }

      /* Krishna Divine Section */
      .krishna-divine-section {
        position: relative;
        width: 100%;
        min-height: 100vh;
        background: url("https://hkmraipur.org/wp-content/uploads/2025/07/4.jpg")
          center center/cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 80px 50px;
        box-sizing: border-box;
        text-align: center;
      }
      .krishna-divine-section::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 1;
      }
      .divine-content {
        position: relative;
        z-index: 2;
        max-width: 1200px;
        margin: 0 auto;
      }
      .divine-main-text {
        font-size: 2.5em;
        font-weight: bold;
        color: white;
        margin-bottom: 40px;
        line-height: 1.3;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
      }
      .sanskrit-verse {
        font-size: 1.8em;
        color: #f4e6d1;
        margin-bottom: 30px;
        font-style: italic;
        line-height: 1.4;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      }
      .verse-translation {
        font-size: 1.1em;
        color: #d4b896;
        margin-bottom: 20px;
        font-weight: 600;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      }
      .scripture-reference {
        font-size: 1.3em;
        color: #c9a876;
        margin-bottom: 50px;
        font-weight: bold;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      }
      .divine-quote {
        font-size: 1.4em;
        color: white;
        font-style: italic;
        line-height: 1.5;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        border-left: 4px solid #f4e6d1;
        padding-left: 30px;
        margin: 0 auto;
        max-width: 900px;
      }

      /* Responsive for Divine Section */
      @media (max-width: 768px) {
        .krishna-divine-section {
          padding: 50px 20px;
        }
        .divine-main-text {
          font-size: 2em;
          margin-bottom: 30px;
        }
        .sanskrit-verse {
          font-size: 1.4em;
          margin-bottom: 20px;
        }
        .verse-translation {
          font-size: 1em;
        }
        .scripture-reference {
          font-size: 1.1em;
          margin-bottom: 30px;
        }
        .divine-quote {
          font-size: 1.2em;
          padding-left: 20px;
        }
      }

      @media (max-width: 480px) {
        .krishna-divine-section {
          padding: 30px 15px;
        }
        .divine-main-text {
          font-size: 1.6em;
          line-height: 1.2;
        }
        .sanskrit-verse {
          font-size: 1.2em;
        }
        .verse-translation {
          font-size: 0.9em;
        }
        .scripture-reference {
          font-size: 1em;
        }
        .divine-quote {
          font-size: 1.1em;
          padding-left: 15px;
        }
      }

      /* Krishna Appearance Section */
      .krishna-appearance-section {
        position: relative;
        width: 100%;
        min-height: 100vh;
        background: linear-gradient(135deg, #f5f0e8 0%, #e8dcc6 100%);
        padding: 80px 50px;
        box-sizing: border-box;
        text-align: center;
      }
      .appearance-title {
        font-size: 3.5em;
        font-weight: bold;
        color: #2c1810;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 3px;
        line-height: 1.2;
      }
      .appearance-subtitle {
        font-size: 1.4em;
        color: #4a3426;
        margin-bottom: 60px;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.5;
      }
      .transformation-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        max-width: 1200px;
        margin: 0 auto 60px auto;
      }
      .transformation-card {
        position: relative;
        background: white;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
      }
      .transformation-card:hover {
        transform: translateY(-10px);
      }
      .transformation-image {
        width: 100%;
        height: 320px;
        position: relative;
        overflow: hidden;
      }
      .transformation-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: blur(0.5px);
      }
      .transformation-text {
        padding: 25px;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        color: #2c1810;
        font-size: 1.1em;
        font-weight: 600;
        line-height: 1.4;
        border-top: 1px solid rgba(255, 255, 255, 0.3);
      }
      .bottom-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
        max-width: 800px;
        margin: 0 auto 60px auto;
      }
      .appearance-conclusion {
        font-size: 1.3em;
        color: #2c1810;
        font-weight: 600;
        line-height: 1.6;
        max-width: 1000px;
        margin: 0 auto;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .decorative-circle {
        position: absolute;
        width: 250px;
        height: 250px;
        background: url("https://hkmraipur.org/wp-content/uploads/2025/07/c1.png")
          no-repeat center center/contain;
        opacity: 0.4;
        filter: brightness(0.6) contrast(1.3);
      }
      .circle-top-left {
        top: 50px;
        left: 50px;
      }
      .circle-top-right {
        top: 50px;
        right: 50px;
      }
      .circle-bottom-left {
        bottom: 50px;
        left: 50px;
      }
      .circle-bottom-right {
        bottom: 50px;
        right: 50px;
      }

      /* Responsive for Appearance Section */
      @media (max-width: 1024px) {
        .transformation-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }
        .bottom-grid {
          grid-template-columns: 1fr;
          gap: 25px;
        }
        .appearance-title {
          font-size: 3em;
        }
      }

      @media (max-width: 768px) {
        .krishna-appearance-section {
          padding: 50px 20px;
        }
        .transformation-grid {
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .appearance-title {
          font-size: 2.5em;
          letter-spacing: 2px;
        }
        .appearance-subtitle {
          font-size: 1.2em;
          margin-bottom: 40px;
        }
        .transformation-text {
          font-size: 1em;
          padding: 20px;
        }
        .transformation-image {
          height: 350px;
        }
        .decorative-circle {
          display: none;
        }
      }

      @media (max-width: 480px) {
        .krishna-appearance-section {
          padding: 30px 15px;
        }
        .appearance-title {
          font-size: 2em;
          letter-spacing: 1px;
        }
        .appearance-subtitle {
          font-size: 1.1em;
        }
        .appearance-conclusion {
          font-size: 1.1em;
          text-transform: none;
        }
        .transformation-image {
          height: 320px;
        }
      }

      /* Why We Celebrate Janmashtami Section */
      .janmashtami-celebration-section {
        position: relative;
        width: 100%;
        min-height: 100vh;
        background: url("https://hkmraipur.org/wp-content/uploads/2025/07/5.jpg")
          center center/cover;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 80px 50px;
        box-sizing: border-box;
      }
      .celebration-content {
        position: relative;
        max-width: 500px;
        padding: 40px;
        margin-left: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      .celebration-title {
        font-size: 2.2em;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 1px;
        line-height: 1.3;
        text-align: left;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
      }
      .celebration-intro {
        font-size: 1.2em;
        color: #f0f0f0;
        margin-bottom: 15px;
        line-height: 1.5;
        text-align: left;
        font-weight: 500;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
      }
      .celebration-benefits {
        margin-bottom: 20px;
      }
      .celebration-benefits ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .celebration-benefits li {
        font-size: 1.1em;
        color: #e8e8e8;
        margin-bottom: 6px;
        padding-left: 15px;
        position: relative;
        line-height: 1.4;
        font-weight: 500;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
      }
      .celebration-benefits li::before {
        content: "•";
        color: #ffd700;
        font-weight: bold;
        position: absolute;
        left: 0;
      }
      .sanskrit-section {
        background: rgba(255, 255, 255, 0.1);
        padding: 15px;
        border-radius: 12px;
        margin-bottom: 20px;
        border-left: 3px solid #ffd700;
        backdrop-filter: blur(5px);
      }
      .sanskrit-text {
        font-size: 1.1em;
        color: #ffffff;
        font-style: italic;
        margin-bottom: 8px;
        line-height: 1.3;
        text-align: left;
        font-weight: 500;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
      }
      .sanskrit-reference {
        font-size: 0.85em;
        color: #ffd700;
        font-weight: bold;
        text-align: right;
        margin-bottom: 12px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
      }
      .celebration-quote {
        font-size: 1.1em;
        color: #f0f0f0;
        font-style: italic;
        line-height: 1.4;
        text-align: left;
        margin-bottom: 0;
        font-weight: 500;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
      }
      .celebration-final {
        font-size: 1.1em;
        color: #e8e8e8;
        line-height: 1.5;
        text-align: left;
        margin-top: 15px;
        font-weight: 500;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
      }

      /* Responsive for Celebration Section */
      @media (max-width: 768px) {
        .janmashtami-celebration-section {
          padding: 40px 20px;
        }
        .celebration-content {
          padding: 30px;
          max-width: 95%;
        }
        .celebration-title {
          font-size: 2em;
          margin-bottom: 20px;
        }
        .celebration-intro,
        .celebration-quote,
        .celebration-final {
          font-size: 1.1em;
        }
        .celebration-benefits li {
          font-size: 1.1em;
        }
        .sanskrit-text {
          font-size: 1.1em;
        }
      }

      @media (max-width: 480px) {
        .janmashtami-celebration-section {
          padding: 30px 15px;
        }
        .celebration-content {
          padding: 25px;
        }
        .celebration-title {
          font-size: 1.7em;
          letter-spacing: 1px;
        }
        .celebration-intro,
        .celebration-quote,
        .celebration-final {
          font-size: 1em;
        }
        .sanskrit-section {
          padding: 15px;
        }
      }

      /* How Janmashtami is Celebrated Section */
      .janmashtami-how-section {
        position: relative;
        width: 100%;
        min-height: 100vh;
        background: linear-gradient(135deg, #f5f0e8 0%, #e8dcc6 100%);
        padding: 80px 50px;
        box-sizing: border-box;
        text-align: left;
      }
      .how-container {
        max-width: 1400px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: center;
      }
      .how-content {
        padding: 0 20px;
      }
      .how-title {
        font-size: 3.2em;
        font-weight: bold;
        color: #2c1810;
        margin-bottom: 30px;
        text-transform: uppercase;
        letter-spacing: 2px;
        line-height: 1.2;
      }
      .how-description {
        font-size: 1.1em;
        color: #4a3426;
        margin-bottom: 25px;
        line-height: 1.6;
        font-weight: 500;
      }
      .celebration-activities {
        list-style: none;
        padding: 0;
        margin-bottom: 30px;
      }
      .celebration-activities li {
        font-size: 1.1em;
        color: #2c1810;
        margin-bottom: 12px;
        padding-left: 25px;
        position: relative;
        line-height: 1.5;
        font-weight: 500;
      }
      .celebration-activities li::before {
        content: "🌟";
        position: absolute;
        left: 0;
        top: 0;
      }
      .midnight-celebration {
        background: rgba(212, 184, 150, 0.2);
        padding: 20px;
        border-radius: 15px;
        border-left: 4px solid #d4b896;
        margin-top: 20px;
      }
      .midnight-celebration h4 {
        font-size: 1.3em;
        color: #2c1810;
        margin-bottom: 10px;
        font-weight: bold;
      }
      .midnight-celebration p {
        font-size: 1.1em;
        color: #4a3426;
        line-height: 1.5;
        margin: 0;
      }
      .how-images-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }
      .how-image-card {
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        transition: transform 0.3s ease;
      }
      .how-image-card:hover {
        transform: translateY(-10px);
      }
      .how-image-card img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
      .how-image-card:hover img {
        transform: scale(1.05);
      }

      /* Responsive for How Section */
      @media (max-width: 1024px) {
        .how-container {
          grid-template-columns: 1fr;
          gap: 40px;
        }
        .how-title {
          font-size: 2.8em;
          text-align: center;
        }
        .how-content {
          text-align: center;
        }
      }

      @media (max-width: 768px) {
        .janmashtami-how-section {
          padding: 50px 20px;
        }
        .how-title {
          font-size: 2.3em;
          letter-spacing: 1px;
        }
        .how-description {
          font-size: 1em;
        }
        .celebration-activities li {
          font-size: 1em;
        }
        .how-images-grid {
          grid-template-columns: 1fr;
          gap: 15px;
        }
        .how-image-card img {
          height: 200px;
        }
      }

      @media (max-width: 480px) {
        .janmashtami-how-section {
          padding: 30px 15px;
        }
        .how-title {
          font-size: 1.9em;
        }
        .how-description {
          font-size: 0.95em;
        }
        .celebration-activities li {
          font-size: 0.95em;
          padding-left: 20px;
        }
        .midnight-celebration {
          padding: 15px;
        }
        .midnight-celebration h4 {
          font-size: 1.1em;
        }
        .midnight-celebration p {
          font-size: 1em;
        }
      }

      /* Janmashtami 2025 Celebrations Section */
      .janmashtami-2025-section {
        position: relative;
        width: 100%;
        min-height: 100vh;
        background: linear-gradient(
          135deg,
          #1a1a1a 0%,
          #2c2c2c 50%,
          #1a1a1a 100%
        );
        padding: 80px 50px;
        box-sizing: border-box;
        text-align: center;
      }
      .celebrations-title {
        font-size: 3.5em;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 50px;
        text-transform: uppercase;
        letter-spacing: 3px;
        line-height: 1.2;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
      }
      .celebrations-container {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: stretch;
      }
      .celebration-location {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 40px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.2);
        position: relative;
        min-height: 600px;
        display: flex;
        flex-direction: column;
      }
      .celebration-location::before {
        content: "";
        position: absolute;
        top: -15px;
        left: 30px;
        width: 40px;
        height: 40px;
        background: url("https://hkmraipur.org/wp-content/uploads/2025/07/google_map_location_logo_icon_159350.webp")
          no-repeat center center/contain;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
        padding: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      }
      .location-title {
        font-size: 2.2em;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 15px;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
      }
      .location-date {
        font-size: 1.3em;
        color: #ffd700;
        margin-bottom: 10px;
        font-weight: 600;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
      }
      .location-venue {
        font-size: 1.2em;
        color: #e0e0e0;
        margin-bottom: 25px;
        line-height: 1.4;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
        min-height: 50px;
      }
      .program-schedule {
        text-align: left;
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .schedule-title {
        font-size: 1.4em;
        color: #ffd700;
        margin-bottom: 15px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
      }
      .schedule-item {
        font-size: 1.1em;
        color: #f0f0f0;
        margin-bottom: 8px;
        line-height: 1.5;
        padding-left: 30px;
        position: relative;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
      }
      .schedule-item::before {
        content: "🕐";
        position: absolute;
        left: 0;
        top: 2px;
        width: 20px;
        text-align: center;
      }
      .special-event {
        background: rgba(255, 215, 0, 0.1);
        border-left: 3px solid #ffd700;
        padding: 15px;
        margin: 15px 0;
        border-radius: 8px;
        backdrop-filter: blur(5px);
      }
      .special-event .schedule-item {
        color: #ffffff;
        font-weight: 500;
      }

      /* Responsive for 2025 Celebrations Section */
      @media (max-width: 1024px) {
        .celebrations-container {
          grid-template-columns: 1fr;
          gap: 40px;
        }
        .celebration-location {
          min-height: auto;
        }
        .celebrations-title {
          font-size: 3em;
        }
      }

      @media (max-width: 768px) {
        .janmashtami-2025-section {
          padding: 50px 20px;
        }
        .celebrations-title {
          font-size: 2.5em;
          letter-spacing: 2px;
        }
        .celebration-location {
          padding: 30px;
        }
        .location-title {
          font-size: 1.8em;
        }
        .location-date {
          font-size: 1.1em;
        }
        .location-venue {
          font-size: 1em;
        }
        .schedule-item {
          font-size: 1em;
        }
      }

      @media (max-width: 480px) {
        .janmashtami-2025-section {
          padding: 30px 15px;
        }
        .celebrations-title {
          font-size: 2em;
          letter-spacing: 1px;
        }
        .celebration-location {
          padding: 25px;
        }
        .location-title {
          font-size: 1.5em;
        }
        .schedule-item {
          font-size: 0.95em;
          padding-left: 27px;
        }
      }

      /* Choose Your Seva Section */
      .choose-seva-section {
        position: relative;
        width: 100%;
        min-height: 100vh;
        background: linear-gradient(135deg, #f8f5f0 0%, #ede4d3 100%);
        padding: 80px 50px;
        box-sizing: border-box;
        text-align: center;
      }
      .seva-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      .seva-main-title {
        font-size: 3.5em;
        font-weight: bold;
        color: #2c1810;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .seva-subtitle {
        font-size: 1.3em;
        color: #4a3426;
        margin-bottom: 40px;
        line-height: 1.5;
      }
      .seva-quote {
        background: rgba(255, 215, 0, 0.1);
        border-left: 4px solid #ffd700;
        padding: 25px;
        margin: 40px auto;
        border-radius: 10px;
        max-width: 900px;
        text-align: left;
      }
      .seva-quote-sanskrit {
        font-size: 1.2em;
        color: #2c1810;
        font-style: italic;
        margin-bottom: 10px;
      }
      .seva-quote-english {
        font-size: 1.1em;
        color: #4a3426;
        margin-bottom: 8px;
      }
      .seva-quote-reference {
        font-size: 0.9em;
        color: #800000;
        font-weight: bold;
        text-align: right;
      }
      .seva-categories {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        margin-top: 50px;
      }
      .seva-category {
        background: white;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: all 0.3s ease;
        border: 1px solid #e8dcc6;
      }
      .seva-category:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
      }
      .seva-header {
        background: linear-gradient(135deg, #2c1810 0%, #4a3426 100%);
        color: white;
        padding: 20px 30px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all 0.3s ease;
      }
      .seva-header:hover {
        background: linear-gradient(135deg, #4a3426 0%, #5a412e 100%);
      }
      .seva-header-content {
        display: flex;
        width: 90%;
      }
      .seva-icon {
        font-size: 24px;
        color: #d4b896;
        width: 40px;
        text-align: left;
        margin-top: 3px;
        flex-shrink: 0;
      }
      .seva-text-content {
        display: flex;
        flex-direction: column;
        padding-left: 5px;
        flex: 1;
      }
      .seva-title {
        font-size: 1.4em;
        font-weight: bold;
        margin: 0 0 8px 0;
        color: white;
        line-height: 1.2;
      }
      .seva-description {
        font-size: 0.9em;
        opacity: 0.9;
        margin: 0;
        color: #e8dcc6;
        line-height: 1.4;
      }
      .seva-arrow {
        font-size: 1.2em;
        transition: transform 0.3s ease;
        color: #d4b896;
      }
      .seva-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
        background: #fafafa;
      }
      .seva-content.active {
        max-height: 1000px;
      }
      .seva-content-inner {
        padding: 30px;
      }
      .seva-item {
        background: white;
        border-radius: 10px;
        padding: 25px;
        margin-bottom: 20px;
        border-left: 4px solid #d4b896;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      }
      .seva-item:last-child {
        margin-bottom: 0;
      }
      .seva-item-title {
        font-size: 1.3em;
        font-weight: bold;
        color: #2c1810;
        margin-bottom: 8px;
      }
      .seva-item-description {
        font-size: 1em;
        color: #666;
        margin-bottom: 20px;
        line-height: 1.5;
      }
      .donation-label {
        font-size: 1em;
        color: #4a3426;
        margin-bottom: 10px;
        margin-top: 15px;
        font-weight: 600;
        text-align: center;
      }
      .donation-amounts {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 15px;
      }
      .donation-btn {
        background: #800000;
        color: #ffecbc;
        border: none;
        padding: 12px 22px;
        border-radius: 7px;
        font-size: 1em;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 5px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        min-width: 100px;
        justify-content: center;
      }
      .donation-btn:hover {
        background: #9a0000;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }
      .donation-btn:before {
        content: "₹";
        font-weight: bold;
      }

      /* Important Information Section */
      .important-info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        margin-top: 50px;
        padding: 30px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 15px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        border: 1px solid #e8dcc6;
      }

      /* Modern Notification Styles */
      .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 400px;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(450px);
        opacity: 0;
        transition: all 0.4s ease;
        font-family: Arial, sans-serif;
      }

      .notification.show {
        transform: translateX(0);
        opacity: 1;
      }

      .notification.success {
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
        border-left: 5px solid #155724;
      }

      .notification.error {
        background: linear-gradient(135deg, #dc3545, #fd7e14);
        color: white;
        border-left: 5px solid #721c24;
      }

      .notification-header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 1.1em;
      }

      .notification-icon {
        margin-right: 10px;
        font-size: 1.3em;
      }

      .notification-title {
        flex: 1;
      }

      .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2em;
        cursor: pointer;
        padding: 0;
        margin-left: 10px;
        opacity: 0.8;
        transition: opacity 0.2s;
      }

      .notification-close:hover {
        opacity: 1;
      }

      .notification-body {
        font-size: 0.95em;
        line-height: 1.4;
        margin-bottom: 10px;
      }

      .notification-details {
        font-size: 0.85em;
        opacity: 0.9;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        padding-top: 10px;
        margin-top: 10px;
      }

      .notification-progress {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 0 0 12px 12px;
        overflow: hidden;
      }

      .notification-progress-bar {
        height: 100%;
        background: rgba(255, 255, 255, 0.8);
        width: 100%;
        transform: translateX(-100%);
        animation: progressBar 5s linear forwards;
      }

      @keyframes progressBar {
        to {
          transform: translateX(0);
        }
      }

      /* Mobile responsive */
      @media (max-width: 768px) {
        .notification {
          right: 10px;
          left: 10px;
          max-width: none;
          transform: translateY(-100px);
          top: 10px;
        }

        .notification.show {
          transform: translateY(0);
        }
      }
      .info-section h3 {
        font-size: 1.4em;
        color: #2c1810;
        margin-bottom: 15px;
        font-weight: bold;
      }
      .info-section ul {
        list-style: none;
        padding: 0;
      }
      .info-section li {
        font-size: 1em;
        color: #4a3426;
        margin-bottom: 8px;
        padding-left: 20px;
        position: relative;
        line-height: 1.4;
      }
      .info-section li:before {
        content: "•";
        color: #d4b896;
        font-weight: bold;
        position: absolute;
        left: 0;
      }

      /* Responsive for Seva Section */
      @media (max-width: 768px) {
        .choose-seva-section {
          padding: 50px 20px;
        }
        .seva-main-title {
          font-size: 2.5em;
        }
        .seva-header {
          padding: 15px 20px;
        }
        .seva-title {
          font-size: 1.2em;
        }
        .seva-content-inner {
          padding: 20px;
        }
        .important-info {
          grid-template-columns: 1fr;
          gap: 25px;
          padding: 20px;
        }
        .donation-amounts {
          justify-content: center;
        }
      }

      @media (max-width: 480px) {
        .choose-seva-section {
          padding: 30px 15px;
        }
        .seva-main-title {
          font-size: 2em;
        }
        .seva-header {
          padding: 12px 15px;
        }
        .seva-title {
          font-size: 1.1em;
        }
        .seva-description {
          font-size: 0.85em;
        }
        .donation-btn {
          padding: 10px 16px;
          min-width: 80px;
          font-size: 0.9em;
          font-size: 0.9em;
        }
      }

      /* Experience Divine Joy Section */
      .divine-joy-section {
        position: relative;
        width: 100%;
        min-height: 100vh;
        background: linear-gradient(135deg, #f5f0e8 0%, #e8dcc6 100%);
        padding: 80px 50px;
        box-sizing: border-box;
        text-align: left;
      }
      .joy-container {
        max-width: 1400px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
        align-items: center;
        min-height: 80vh;
      }
      .joy-content {
        padding: 0 20px;
      }
      .joy-title {
        font-size: 3.2em;
        font-weight: bold;
        color: #2c1810;
        margin-bottom: 30px;
        text-transform: uppercase;
        letter-spacing: 2px;
        line-height: 1.2;
      }
      .joy-description {
        font-size: 1.2em;
        color: #4a3426;
        margin-bottom: 40px;
        line-height: 1.6;
        font-weight: 500;
      }
      .mantra-section {
        background: rgba(212, 184, 150, 0.3);
        padding: 30px;
        border-radius: 20px;
        border-left: 4px solid #d4b896;
        margin-top: 30px;
        text-align: center;
      }
      .mantra-text {
        font-size: 1.4em;
        color: #2c1810;
        font-weight: bold;
        line-height: 1.5;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .joy-image {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        min-height: 500px;
      }
      .joy-image img {
        width: 100%;
        max-width: 400px;
        height: auto;
        border-radius: 20px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        transition: transform 0.3s ease;
      }
      .joy-image img:hover {
        transform: scale(1.05);
      }

      /* Responsive for Divine Joy Section */
      @media (max-width: 1024px) {
        .joy-container {
          grid-template-columns: 1fr;
          gap: 50px;
        }
        .joy-title {
          font-size: 2.8em;
          text-align: center;
        }
        .joy-content {
          text-align: center;
        }
      }

      @media (max-width: 768px) {
        .divine-joy-section {
          padding: 50px 20px;
        }
        .joy-title {
          font-size: 2.3em;
          letter-spacing: 1px;
        }
        .joy-description {
          font-size: 1.1em;
        }
        .mantra-section {
          padding: 25px;
        }
        .mantra-text {
          font-size: 1.2em;
        }
        .joy-image img {
          max-width: 350px;
        }
      }

      @media (max-width: 480px) {
        .divine-joy-section {
          padding: 30px 15px;
        }
        .joy-title {
          font-size: 1.9em;
        }
        .joy-description {
          font-size: 1em;
        }
        .mantra-section {
          padding: 20px;
        }
        .mantra-text {
          font-size: 1.1em;
          letter-spacing: 0.5px;
        }
        .joy-image img {
          max-width: 300px;
        }
      }

      /* Additional fixes for seva alignment */
      .seva-header {
        position: relative;
      }

      .seva-header-content {
        display: grid !important;
        grid-template-columns: 40px 1fr;
        align-items: start;
        width: 85%;
      }

      .seva-icon {
        margin-top: 3px;
        grid-column: 1;
        font-size: 1.5em;
      }

      .seva-text-content {
        grid-column: 2;
        padding-left: 5px;
      }

      .seva-arrow {
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
      }

      /* Debugging CSS for seva sections */
      .seva-categories * {
        box-sizing: border-box;
      }

      .seva-category {
        margin-bottom: 25px !important;
        border: 3px solid #c9a876 !important;
        border-radius: 15px !important;
        background: #ffffff !important;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3) !important;
        transition: all 0.3s ease !important;
        overflow: hidden !important;
      }

      .seva-header {
        padding: 25px 30px !important;
        cursor: pointer !important;
        border-radius: 15px 15px 0 0 !important;
        background: linear-gradient(
          135deg,
          #2c1810 0%,
          #4a3426 100%
        ) !important;
        color: white !important;
        transition: all 0.3s ease !important;
        min-height: 90px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
      }

      .seva-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
        background: white;
        border-radius: 0 0 10px 10px;
      }

      .seva-content.active {
        max-height: 2000px; /* Increased for better content display */
        overflow: visible;
      }

      .seva-item {
        padding: 25px;
        margin: 0;
        border: none;
        background: white;
        border-bottom: 1px solid #f0f0f0;
      }

      .seva-item:last-child {
        border-bottom: none;
      }

      .seva-item-title {
        font-size: 1.3em;
        font-weight: bold;
        color: #2c1810;
        margin-bottom: 8px;
        display: block;
      }

      .seva-item-description {
        font-size: 1em;
        color: #666;
        margin-bottom: 20px;
        line-height: 1.5;
        display: block;
      }

      /* Ensure seva sections are visible with proper styling */
      .seva-category {
        opacity: 1 !important;
        visibility: visible !important;
        display: block !important;
        background: #ffffff !important;
        border-radius: 15px !important;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25) !important;
        border: 2px solid #d4b896 !important;
        margin-bottom: 25px !important;
        overflow: hidden !important;
        transition: all 0.3s ease !important;
      }

      .seva-category:hover {
        transform: translateY(-5px) !important;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35) !important;
        border-color: #c9a876 !important;
      }

      .seva-content {
        overflow: visible !important;
        background: #fafafa !important;
        border-top: 1px solid #e8dcc6 !important;
      }

      .seva-item {
        opacity: 1 !important;
        visibility: visible !important;
        display: block !important;
        background: white !important;
        margin: 15px !important;
        padding: 20px !important;
        border-radius: 10px !important;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
        border: 1px solid #e8dcc6 !important;
      }
    </style>
  </head>
  <body>
    <div class="hero-section">
      <div class="slider-container">
        <div
          class="slide active"
          style="
            background-image: url('https://hkmraipur.org/wp-content/uploads/2025/07/8.jpg');
          "
        ></div>
        <div
          class="slide"
          style="
            background-image: url('https://hkmraipur.org/wp-content/uploads/2025/07/4-1.jpg');
          "
        ></div>
        <div
          class="slide"
          style="
            background-image: url('https://hkmraipur.org/wp-content/uploads/2025/07/1-1.jpg');
          "
        ></div>
        <div
          class="slide"
          style="
            background-image: url('https://hkmraipur.org/wp-content/uploads/2025/07/2.jpg');
          "
        ></div>
        <div
          class="slide"
          style="
            background-image: url('https://hkmraipur.org/wp-content/uploads/2025/07/3.jpg');
          "
        ></div>
        <div
          class="slide"
          style="
            background-image: url('https://hkmraipur.org/wp-content/uploads/2025/07/7.jpg');
          "
        ></div>
        <div
          class="slide"
          style="
            background-image: url('https://hkmraipur.org/wp-content/uploads/2025/07/6.jpg');
          "
        ></div>
      </div>

      <!-- Navigation Arrows -->
      <button class="slider-nav prev" onclick="heroSlider.prevSlide()">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="slider-nav next" onclick="heroSlider.nextSlide()">
        <i class="fas fa-chevron-right"></i>
      </button>

      <!-- Navigation Dots -->
      <div class="slider-dots">
        <span class="dot active" data-slide="0"></span>
        <span class="dot" data-slide="1"></span>
        <span class="dot" data-slide="2"></span>
        <span class="dot" data-slide="3"></span>
        <span class="dot" data-slide="4"></span>
        <span class="dot" data-slide="5"></span>
        <span class="dot" data-slide="6"></span>
      </div>

      <!-- Progress Bar -->
      <div class="slide-progress">
        <div class="progress-bar"></div>
      </div>

      <div class="hero-text">
        <h1 class="hero-title">SRI KRISHNA JANMASHTAMI</h1>
        <p class="hero-subtitle">THE DIVINE APPEARANCE OF THE SUPREME LORD</p>
      </div>
    </div>

    <div class="opulence-section">
      <div class="decorative-rays rays-top-right"></div>
      <div class="decorative-rays rays-bottom-left"></div>
      <div class="opulence-content">
        <h2 class="opulence-title">Who Possesses All Six Opulences Forever?</h2>
        <p class="opulence-text">
          Do you know who is the most beautiful, most intelligent, most famous,
          the wealthiest, the strongest, and the most renounced?
        </p>
        <p class="opulence-text">
          Famous people like film stars, sports stars, industrialists,
          scientists, and politicians may attract millions for a while—but they
          appear, disappear, and are forgotten over time, like shooting stars.
        </p>
        <p class="opulence-text">
          God is One—the oldest, yet eternally youthful—who possesses all six
          opulences in full, forever.
        </p>
        <p class="opulence-text">
          The Supreme Lord is known by many names: Krishna, Christ, Allah. The
          Greek word "kristos" originates from the Sanskrit "Krsta" or "Krsna",
          meaning all-attractive.
        </p>
        <p class="opulence-text">
          So when we say "Christ," "Krsta," or "Krishna," we refer to the same
          all-attractive Supreme God.
        </p>
      </div>
      <div class="opulence-image">
        <img
          src="https://hkmraipur.org/wp-content/uploads/2025/07/krishna-jii2.jpg"
          alt="India Gate illuminated at night"
        />
      </div>
    </div>

    <div class="krishna-opulences-section">
      <h2 class="krishna-main-title">Krishna</h2>
      <h3 class="krishna-subtitle">The Supreme Personality of Godhead</h3>
      <p class="krishna-description">
        In His Divine Pastimes, Lord Krishna Uniquely Displayed All Six
        Opulences in Full Measure:
      </p>

      <div class="opulences-grid">
        <div class="opulence-card">
          <img
            src="https://hkmraipur.org/wp-content/uploads/2025/07/beauty.jpg"
            alt="Beauty - Taj Mahal"
          />
          <div class="opulence-label">Beauty</div>
        </div>

        <div class="opulence-card">
          <img
            src="https://hkmraipur.org/wp-content/uploads/2025/07/knowledge.jpg"
            alt="Knowledge - Ancient Indian Temple"
          />
          <div class="opulence-label">Knowledge</div>
        </div>

        <div class="opulence-card">
          <img
            src="https://hkmraipur.org/wp-content/uploads/2025/07/fame.webp"
            alt="Fame - Qutub Minar Delhi"
          />
          <div class="opulence-label">Fame</div>
        </div>

        <div class="opulence-card">
          <img
            src="https://hkmraipur.org/wp-content/uploads/2025/07/wealth.jpg"
            alt="Wealth - Golden Temple Amritsar"
          />
          <div class="opulence-label">Wealth</div>
        </div>

        <div class="opulence-card">
          <img
            src="https://hkmraipur.org/wp-content/uploads/2025/07/strength.jpg"
            alt="Strength - Western Ghats Mountains"
          />
          <div class="opulence-label">Strength</div>
        </div>

        <div class="opulence-card">
          <img
            src="https://hkmraipur.org/wp-content/uploads/2025/07/renuciation.jpg"
            alt="Renunciation - Varanasi Ghats"
          />
          <div class="opulence-label">Renunciation</div>
        </div>
      </div>
    </div>

    <div class="krishna-divine-section">
      <div class="divine-content">
        <h2 class="divine-main-text">
          These qualities make Him the Supreme Personality of Godhead,<br />
          worshipped across India and the world.
        </h2>

        <div class="sanskrit-verse">
          īśvaraḥ paramaḥ kṛṣṇaḥ<br />
          sac-cid-ānanda-vigrahaḥ<br />
          anādir ādir govindaḥ<br />
          sarva-kāraṇa-kāraṇam
        </div>

        <div class="verse-translation">— Śrī Brahma-saṁhitā 5.1</div>

        <blockquote class="divine-quote">
          "KRISHNA, WHO IS KNOWN AS GOVINDA, IS THE SUPREME GODHEAD. HE HAS AN
          ETERNAL, BLISSFUL SPIRITUAL BODY. HE IS THE ORIGIN OF ALL, AND THE
          CAUSE OF ALL CAUSES."
        </blockquote>
      </div>
    </div>

    <div class="krishna-appearance-section">
      <div class="decorative-circle circle-top-left"></div>
      <div class="decorative-circle circle-top-right"></div>
      <div class="decorative-circle circle-bottom-left"></div>
      <div class="decorative-circle circle-bottom-right"></div>

      <h2 class="appearance-title">The Appearance<br />of Lord Krishna</h2>
      <p class="appearance-subtitle">
        When Lord Krishna descended to Earth, the entire atmosphere transformed:
      </p>

      <div class="transformation-grid">
        <div class="transformation-card">
          <div class="transformation-image">
            <img
              src="https://hkmraipur.org/wp-content/uploads/2025/07/trees.jpg"
              alt="Krishna with divine fruits and flowers"
            />
          </div>
          <div class="transformation-text">
            Trees blossomed with divine fruits and flowers.
          </div>
        </div>

        <div class="transformation-card">
          <div class="transformation-image">
            <img
              src="https://hkmraipur.org/wp-content/uploads/2025/07/river.jpg"
              alt="Krishna by sacred rivers"
            />
          </div>
          <div class="transformation-text">
            Rivers overflowed with joy and sacred water.
          </div>
        </div>

        <div class="transformation-card">
          <div class="transformation-image">
            <img
              src="https://hkmraipur.org/wp-content/uploads/2025/07/birds.jpg"
              alt="Krishna with divine birds"
            />
          </div>
          <div class="transformation-text">
            Birds chirped in bliss, singing divine songs.
          </div>
        </div>
      </div>

      <div class="bottom-grid">
        <div class="transformation-card">
          <div class="transformation-image">
            <img
              src="https://hkmraipur.org/wp-content/uploads/2025/07/wind-1.jpg"
              alt="Krishna in sacred gardens"
            />
            <div class="cloud cloud1"></div>
            <div class="cloud cloud2"></div>
            <div class="cloud cloud3"></div>
          </div>
          <div class="transformation-text">
            Wind carried fragrance from sacred gardens.
          </div>
        </div>

        <div class="transformation-card">
          <div class="transformation-image">
            <img
              src="https://hkmraipur.org/wp-content/uploads/2025/07/lord-krishna-krishna-janmashtami-ai-generated-posters_1277069-6415.avif"
              alt="Krishna with heavenly flowers"
            />
            <div class="cloud cloud1"></div>
            <div class="cloud cloud2"></div>
            <div class="cloud cloud3"></div>
          </div>
          <div class="transformation-text">
            Sky thundered sweetly, flowers fell from heaven.
          </div>
        </div>
      </div>

      <p class="appearance-conclusion">
        Born as the eighth child of Devaki and Vasudeva, Lord Krishna appeared
        not like an ordinary human, but by His own will — to protect the pious
        and annihilate evil.
      </p>
    </div>

    <div class="janmashtami-celebration-section">
      <div class="celebration-content">
        <h2 class="celebration-title">Why We Celebrate Janmashtami</h2>

        <p class="celebration-intro">
          Each year, millions observe Sri Krishna Janmashtami to remember the
          Lord's divine appearance and teachings. This sacred observance brings:
        </p>

        <div class="celebration-benefits">
          <ul>
            <li>Spiritual purification</li>
            <li>Freedom from karmic reactions</li>
            <li>Peace and joy in life</li>
          </ul>
        </div>

        <div class="sanskrit-section">
          <div class="sanskrit-text">
            janma karma ca me divyam<br />
            evam yo vetti tattvatah<br />
            tyaktva deham punar janma<br />
            naiti mam eti so 'rjuna
          </div>
          <div class="sanskrit-reference">— Bhagavad-gita 4.9</div>

          <p class="celebration-quote">
            "Whoever understands My divine birth and activities will never take
            birth again in this world, but will attain My eternal abode."
          </p>
        </div>

        <p class="celebration-final">
          According to Hari-bhakti-vilasa: "By observing Janmashtami, one is
          freed from sins of seven lives and blessed with good children, health,
          and prosperity."
        </p>
      </div>
    </div>

    <div class="janmashtami-how-section">
      <div class="how-container">
        <div class="how-content">
          <h2 class="how-title">How Janmashtami is Celebrated</h2>

          <p class="how-description">On this sacred day:</p>

          <ul class="celebration-activities">
            <li>Devotees fast till midnight.</li>
            <li>
              Krishna temples are decorated with flowers, lights, and festive
              décor.
            </li>
            <li>
              Special abhishekams, bhajans, aratis, and offerings are held.
            </li>
            <li>
              Over 500 food items are lovingly prepared and offered to Lord
              Krishna.
            </li>
            <li>
              People chant His holy names, read the Bhagavad Gita, and
              distribute spiritual books.
            </li>
          </ul>

          <div class="midnight-celebration">
            <h4>The Grand Midnight Celebration</h4>
            <p>
              At midnight, a grand abhisheka is performed followed by maha-arati
              and anukalpa prasadam. The temple overflows with joy, songs, and
              the presence of thousands of guests.
            </p>
          </div>
        </div>

        <div class="how-images-grid">
          <div class="how-image-card">
            <img
              src="https://hkmraipur.org/wp-content/uploads/2025/07/janamastami-celebrate1.jpg"
              alt="Krishna Janmashtami celebration with devotees"
            />
          </div>

          <div class="how-image-card">
            <img
              src="https://cdn.britannica.com/50/263450-050-F3CD50C1/girls-dressed-as-hindu-deity-krishna-and-radha-radhika-during-krishna-janmashtami-festival-celebrations.jpg"
              alt="Children dressed as Krishna and Radha during celebrations"
            />
          </div>

          <div class="how-image-card">
            <img
              src="https://images.indianexpress.com/2024/08/janmashtami-5-1_20240821043123.jpg"
              alt="Traditional Janmashtami festival celebrations"
            />
          </div>

          <div class="how-image-card">
            <img
              src="https://images.tribuneindia.com/cms/gall_content/2019/8/2019_8$largeimg24_Saturday_2019_071112345.jpg"
              alt="Krishna Janmashtami celebration with decorations"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="janmashtami-2025-section">
      <h2 class="celebrations-title">Janmashtami 2025 Celebrations</h2>

      <div class="celebrations-container">
        <div class="celebration-location">
          <h3 class="location-title">In Bhilai</h3>
          <p class="location-date">DATE: 16TH AUGUST 2025</p>

          <div class="program-schedule">
            <h4 class="schedule-title">Program Schedule:</h4>
            <div class="schedule-item">MANGALA ARATI: 4:30 AM</div>
            <div class="schedule-item">PRATAH ABHISHEK: 5:30 AM</div>
            <div class="schedule-item">JHULAN UTSAV: 7:00 AM</div>
            <div class="schedule-item">DARSHAN ARATI: 8:00 AM</div>
            <div class="schedule-item">RAJ BHOG ARATI: 12:30 PM</div>
            <div class="schedule-item">SANDHYA ARATI: 7:00 PM</div>
            <div class="schedule-item">NAUKA VIHAR: 7:30 PM</div>

            <div class="special-event">
              <div class="schedule-item">
                BHAJAN SANDHYA BY AGAM AGRAWAL & GROUP: 8:15 PM – 9:30 PM
              </div>
              <div class="schedule-item">
                JANMASHTAMI SPECIAL MAHA ABHISHEK: 10:00 PM – 11:30 PM
              </div>
              <div class="schedule-item">MIDNIGHT MAHA ARATI: 12:00 AM</div>
              <div class="schedule-item">MAHA PRASADAM: 12:30 AM</div>
            </div>
          </div>
        </div>

        <div class="celebration-location">
          <h3 class="location-title">In Raipur</h3>
          <p class="location-date">DATE: 15TH AUGUST 2025</p>
          <p class="location-venue">
            VENUE: PANDIT DEENDAYAL UPADHYAY AUDITORIUM, AMANAKA
          </p>

          <div class="program-schedule">
            <h4 class="schedule-title">Program Schedule:</h4>
            <div class="schedule-item">
              SRI SRI RADHA KRISHNA DIVYA ABHISHEK: 7:00 PM
            </div>

            <div class="special-event">
              <div class="schedule-item">
                BHAJAN SANDHYA BY AGAM AGRAWAL & GROUP: 8:15 PM – 9:30 PM
              </div>
              <div class="schedule-item">MAHA ARATI: 9:30 PM</div>
              <div class="schedule-item">JHULAN UTSAV: 10:00 PM</div>
              <div class="schedule-item">MAHA PRASADAM: 10:30 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="choose-seva-section">
      <div class="seva-container">
        <h2 class="seva-main-title">Choose Your Seva</h2>
        <p class="seva-subtitle">
          Select from various spiritual services and contribute to the divine
          celebration
        </p>

        <div class="seva-quote">
          <div class="seva-quote-sanskrit">
            "यत्करोषि यदश्नासि यज्जुहोषि ददासि यत् । यत्तपस्यसि कौन्तेय
            तत्कुरुष्व मदर्पणम् ।।"
          </div>
          <div class="seva-quote-english">
            Whatever you do, whatever you eat, whatever you offer in sacrifice,
            whatever you give away, whatever austerities you practice—do that as
            an offering to Me.
          </div>
          <div class="seva-quote-reference">— Bhagavad Gita 9.27</div>
        </div>

        <div class="seva-categories">
          <!-- 💧 Abhishekam Seva -->
          <div class="seva-category">
            <div class="seva-header" onclick="toggleSeva(this)">
              <div class="seva-header-content">
                <span class="seva-icon">💧</span>
                <div class="seva-text-content">
                  <h3 class="seva-title">Abhishekam Seva</h3>
                  <p class="seva-description">
                    Sacred bathing ceremony of Sri Krishna with milk, honey, and
                    sacred waters
                  </p>
                </div>
              </div>
              <i class="fas fa-chevron-down seva-arrow"></i>
            </div>
            <div class="seva-content">
              <div class="seva-content-inner">
                <div class="seva-item">
                  <h4 class="seva-item-title">Kalasha Abhishek (Yajaman)</h4>
                  <p class="seva-item-description">
                    Special Kalasha abhishekam with complete ritual ceremony
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(15001, 'Abhishekam Seva', 'Kalasha Abhishek (Yajaman)')"
                    >
                      15001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(25001, 'Abhishekam Seva', 'Kalasha Abhishek (Yajaman)')"
                    >
                      25001
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">
                    Maha Abhishek (Morning - 5:30 am)
                  </h4>
                  <p class="seva-item-description">
                    Early morning sacred abhishekam ceremony
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(5001, 'Abhishekam Seva', 'Maha Abhishek (Morning - 5:30 am)')"
                    >
                      5001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(7501, 'Abhishekam Seva', 'Maha Abhishek (Morning - 5:30 am)')"
                    >
                      7501
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">
                    Maha Abhishek (Midnight - 10:30 pm)
                  </h4>
                  <p class="seva-item-description">
                    Special midnight abhishekam ceremony for Janmashtami
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(11001, 'Abhishekam Seva', 'Maha Abhishek (Midnight - 10:30 pm)')"
                    >
                      11001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(15001, 'Abhishekam Seva', 'Maha Abhishek (Midnight - 10:30 pm)')"
                    >
                      15001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(21001, 'Abhishekam Seva', 'Maha Abhishek (Midnight - 10:30 pm)')"
                    >
                      21001
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Srila Prabhupada Abhishek</h4>
                  <p class="seva-item-description">
                    Sacred abhishekam for Srila Prabhupada
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(3501, 'Abhishekam Seva', 'Srila Prabhupada Abhishek')"
                    >
                      3501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(5001, 'Abhishekam Seva', 'Srila Prabhupada Abhishek')"
                    >
                      5001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(11000, 'Abhishekam Seva', 'Srila Prabhupada Abhishek')"
                    >
                      11000
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 🌸 Flower Decoration Seva -->
          <div class="seva-category">
            <div class="seva-header" onclick="toggleSeva(this)">
              <div class="seva-header-content">
                <span class="seva-icon">🌸</span>
                <div class="seva-text-content">
                  <h3 class="seva-title">Flower Decoration Seva</h3>
                  <p class="seva-description">
                    Beautiful floral decorations for the divine altar
                  </p>
                </div>
              </div>
              <i class="fas fa-chevron-down seva-arrow"></i>
            </div>
            <div class="seva-content">
              <div class="seva-content-inner">
                <div class="seva-item">
                  <h4 class="seva-item-title">Phool Bangla Seva</h4>
                  <p class="seva-item-description">
                    Elaborate flower palace decoration for the deities
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(5001, 'Flower Decoration Seva', 'Phool Bangla Seva')"
                    >
                      5001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(11001, 'Flower Decoration Seva', 'Phool Bangla Seva')"
                    >
                      11001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(21001, 'Flower Decoration Seva', 'Phool Bangla Seva')"
                    >
                      21001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(31001, 'Flower Decoration Seva', 'Phool Bangla Seva')"
                    >
                      31001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(51001, 'Flower Decoration Seva', 'Phool Bangla Seva')"
                    >
                      51001
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Pushpa Sringar Seva</h4>
                  <p class="seva-item-description">
                    Beautiful flower adornment and decoration service
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(7551, 'Flower Decoration Seva', 'Pushpa Sringar Seva')"
                    >
                      7551
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(10551, 'Flower Decoration Seva', 'Pushpa Sringar Seva')"
                    >
                      10551
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(15551, 'Flower Decoration Seva', 'Pushpa Sringar Seva')"
                    >
                      15551
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Pushpa Abhishek Seva</h4>
                  <p class="seva-item-description">
                    Flower-based abhishekam ceremony
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(5001, 'Flower Decoration Seva', 'Pushpa Abhishek Seva')"
                    >
                      5001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(11001, 'Flower Decoration Seva', 'Pushpa Abhishek Seva')"
                    >
                      11001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(21001, 'Flower Decoration Seva', 'Pushpa Abhishek Seva')"
                    >
                      21001
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Deity Garland Seva</h4>
                  <p class="seva-item-description">
                    Sacred garlands for the deities
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(7551, 'Flower Decoration Seva', 'Deity Garland Seva')"
                    >
                      7551
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(10551, 'Flower Decoration Seva', 'Deity Garland Seva')"
                    >
                      10551
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(15551, 'Flower Decoration Seva', 'Deity Garland Seva')"
                    >
                      15551
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(21001, 'Flower Decoration Seva', 'Deity Garland Seva')"
                    >
                      21001
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Pallaki Decoration Seva</h4>
                  <p class="seva-item-description">
                    Beautiful decoration for the divine palanquin
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(2551, 'Flower Decoration Seva', 'Pallaki Decoration Seva')"
                    >
                      2551
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(5551, 'Flower Decoration Seva', 'Pallaki Decoration Seva')"
                    >
                      5551
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(7551, 'Flower Decoration Seva', 'Pallaki Decoration Seva')"
                    >
                      7551
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(10551, 'Flower Decoration Seva', 'Pallaki Decoration Seva')"
                    >
                      10551
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Jhulan Decoration Seva</h4>
                  <p class="seva-item-description">
                    Swing decoration for Krishna's Jhulan Utsav
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(2101, 'Flower Decoration Seva', 'Jhulan Decoration Seva')"
                    >
                      2101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(5101, 'Flower Decoration Seva', 'Jhulan Decoration Seva')"
                    >
                      5101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(7101, 'Flower Decoration Seva', 'Jhulan Decoration Seva')"
                    >
                      7101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(10101, 'Flower Decoration Seva', 'Jhulan Decoration Seva')"
                    >
                      10101
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 🌼 Sri Vigraha Seva -->
          <div class="seva-category">
            <div class="seva-header" onclick="toggleSeva(this)">
              <div class="seva-header-content">
                <span class="seva-icon">🌼</span>
                <div class="seva-text-content">
                  <h3 class="seva-title">Sri Vigraha Seva</h3>
                  <p class="seva-description">
                    Direct service to the sacred deity forms
                  </p>
                </div>
              </div>
              <i class="fas fa-chevron-down seva-arrow"></i>
            </div>
            <div class="seva-content">
              <div class="seva-content-inner">
                <div class="seva-item">
                  <h4 class="seva-item-title">Poshak Seva (All Deities)</h4>
                  <p class="seva-item-description">
                    Beautiful clothing service for all deities
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(11001, 'Sri Vigraha Seva', 'Poshak Seva (All Deities)')"
                    >
                      11001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(21001, 'Sri Vigraha Seva', 'Poshak Seva (All Deities)')"
                    >
                      21001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(35001, 'Sri Vigraha Seva', 'Poshak Seva (All Deities)')"
                    >
                      35001
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Poshak Seva (Radha Krishna)</h4>
                  <p class="seva-item-description">
                    Special clothing service for Radha Krishna
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(15001, 'Sri Vigraha Seva', 'Poshak Seva (Radha Krishna)')"
                    >
                      15001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(25001, 'Sri Vigraha Seva', 'Poshak Seva (Radha Krishna)')"
                    >
                      25001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(35001, 'Sri Vigraha Seva', 'Poshak Seva (Radha Krishna)')"
                    >
                      35001
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Abharan Seva (All Deities)</h4>
                  <p class="seva-item-description">
                    Ornament and jewelry service for all deities
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(11001, 'Sri Vigraha Seva', 'Abharan Seva (All Deities)')"
                    >
                      11001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(21001, 'Sri Vigraha Seva', 'Abharan Seva (All Deities)')"
                    >
                      21001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(35001, 'Sri Vigraha Seva', 'Abharan Seva (All Deities)')"
                    >
                      35001
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Abharan Seva (Radha Krishna)</h4>
                  <p class="seva-item-description">
                    Special ornament service for Radha Krishna
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(15001, 'Sri Vigraha Seva', 'Abharan Seva (Radha Krishna)')"
                    >
                      15001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(25001, 'Sri Vigraha Seva', 'Abharan Seva (Radha Krishna)')"
                    >
                      25001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(35001, 'Sri Vigraha Seva', 'Abharan Seva (Radha Krishna)')"
                    >
                      35001
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Chappan Bhog Seva</h4>
                  <p class="seva-item-description">
                    56 varieties of food offerings to Krishna
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(2001, 'Sri Vigraha Seva', 'Chappan Bhog Seva')"
                    >
                      2001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(5001, 'Sri Vigraha Seva', 'Chappan Bhog Seva')"
                    >
                      5001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(10001, 'Sri Vigraha Seva', 'Chappan Bhog Seva')"
                    >
                      10001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(15001, 'Sri Vigraha Seva', 'Chappan Bhog Seva')"
                    >
                      15001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(21001, 'Sri Vigraha Seva', 'Chappan Bhog Seva')"
                    >
                      21001
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Naivaidyam Seva</h4>
                  <p class="seva-item-description">
                    Daily food offerings to the deities
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(3501, 'Sri Vigraha Seva', 'Naivaidyam Seva')"
                    >
                      3501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(5001, 'Sri Vigraha Seva', 'Naivaidyam Seva')"
                    >
                      5001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(7501, 'Sri Vigraha Seva', 'Naivaidyam Seva')"
                    >
                      7501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(10001, 'Sri Vigraha Seva', 'Naivaidyam Seva')"
                    >
                      10001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(15001, 'Sri Vigraha Seva', 'Naivaidyam Seva')"
                    >
                      15001
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Pallaki Seva</h4>
                  <p class="seva-item-description">
                    Divine palanquin service for the deities
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(2101, 'Sri Vigraha Seva', 'Pallaki Seva')"
                    >
                      2101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(3101, 'Sri Vigraha Seva', 'Pallaki Seva')"
                    >
                      3101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(5101, 'Sri Vigraha Seva', 'Pallaki Seva')"
                    >
                      5101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(10101, 'Sri Vigraha Seva', 'Pallaki Seva')"
                    >
                      10101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(15101, 'Sri Vigraha Seva', 'Pallaki Seva')"
                    >
                      15101
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Makhan Mishri Seva</h4>
                  <p class="seva-item-description">
                    Butter and sugar candy offerings, Krishna's favorite
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(101, 'Sri Vigraha Seva', 'Makhan Mishri Seva')"
                    >
                      101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(201, 'Sri Vigraha Seva', 'Makhan Mishri Seva')"
                    >
                      201
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(501, 'Sri Vigraha Seva', 'Makhan Mishri Seva')"
                    >
                      501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(1008, 'Sri Vigraha Seva', 'Makhan Mishri Seva')"
                    >
                      1008
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(1501, 'Sri Vigraha Seva', 'Makhan Mishri Seva')"
                    >
                      1501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(2501, 'Sri Vigraha Seva', 'Makhan Mishri Seva')"
                    >
                      2501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(5001, 'Sri Vigraha Seva', 'Makhan Mishri Seva')"
                    >
                      5001
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Tulasi Archana Seva</h4>
                  <p class="seva-item-description">
                    Sacred Tulasi worship and offerings
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(501, 'Sri Vigraha Seva', 'Tulasi Archana Seva')"
                    >
                      501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(1008, 'Sri Vigraha Seva', 'Tulasi Archana Seva')"
                    >
                      1008
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(1501, 'Sri Vigraha Seva', 'Tulasi Archana Seva')"
                    >
                      1501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(2501, 'Sri Vigraha Seva', 'Tulasi Archana Seva')"
                    >
                      2501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(5001, 'Sri Vigraha Seva', 'Tulasi Archana Seva')"
                    >
                      5001
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 🍛 Annadana Seva -->
          <div class="seva-category">
            <div class="seva-header" onclick="toggleSeva(this)">
              <div class="seva-header-content">
                <span class="seva-icon">🍛</span>
                <div class="seva-text-content">
                  <h3 class="seva-title">Annadana Seva</h3>
                  <p class="seva-description">
                    Sacred food distribution to devotees and the needy
                  </p>
                </div>
              </div>
              <i class="fas fa-chevron-down seva-arrow"></i>
            </div>
            <div class="seva-content">
              <div class="seva-content-inner">
                <div class="seva-item">
                  <h4 class="seva-item-title">
                    Anukalpa Feast Distribution (Post Janmashtami)
                  </h4>
                  <p class="seva-item-description">
                    Complete feast distribution after Janmashtami celebration
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(101, 'Annadana Seva', 'Anukalpa Feast Distribution (Post Janmashtami)')"
                    >
                      101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(201, 'Annadana Seva', 'Anukalpa Feast Distribution (Post Janmashtami)')"
                    >
                      201
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(501, 'Annadana Seva', 'Anukalpa Feast Distribution (Post Janmashtami)')"
                    >
                      501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(751, 'Annadana Seva', 'Anukalpa Feast Distribution (Post Janmashtami)')"
                    >
                      751
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(1501, 'Annadana Seva', 'Anukalpa Feast Distribution (Post Janmashtami)')"
                    >
                      1501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(2501, 'Annadana Seva', 'Anukalpa Feast Distribution (Post Janmashtami)')"
                    >
                      2501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(5001, 'Annadana Seva', 'Anukalpa Feast Distribution (Post Janmashtami)')"
                    >
                      5001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(10001, 'Annadana Seva', 'Anukalpa Feast Distribution (Post Janmashtami)')"
                    >
                      10001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(21001, 'Annadana Seva', 'Anukalpa Feast Distribution (Post Janmashtami)')"
                    >
                      21001
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Khichdi Distribution</h4>
                  <p class="seva-item-description">
                    Sacred khichdi prasadam distribution
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(501, 'Annadana Seva', 'Khichdi Distribution')"
                    >
                      501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(751, 'Annadana Seva', 'Khichdi Distribution')"
                    >
                      751
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(1101, 'Annadana Seva', 'Khichdi Distribution')"
                    >
                      1101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(2101, 'Annadana Seva', 'Khichdi Distribution')"
                    >
                      2101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(5101, 'Annadana Seva', 'Khichdi Distribution')"
                    >
                      5101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(11001, 'Annadana Seva', 'Khichdi Distribution')"
                    >
                      11001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(21001, 'Annadana Seva', 'Khichdi Distribution')"
                    >
                      21001
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Halwa Distribution</h4>
                  <p class="seva-item-description">
                    Sweet halwa prasadam distribution
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(501, 'Annadana Seva', 'Halwa Distribution')"
                    >
                      501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(751, 'Annadana Seva', 'Halwa Distribution')"
                    >
                      751
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(1101, 'Annadana Seva', 'Halwa Distribution')"
                    >
                      1101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(2101, 'Annadana Seva', 'Halwa Distribution')"
                    >
                      2101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(5101, 'Annadana Seva', 'Halwa Distribution')"
                    >
                      5101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(11001, 'Annadana Seva', 'Halwa Distribution')"
                    >
                      11001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(15001, 'Annadana Seva', 'Halwa Distribution')"
                    >
                      15001
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 🙏 Other Seva -->
          <div class="seva-category">
            <div class="seva-header" onclick="toggleSeva(this)">
              <div class="seva-header-content">
                <span class="seva-icon">🙏</span>
                <div class="seva-text-content">
                  <h3 class="seva-title">Other Seva</h3>
                  <p class="seva-description">
                    Various other spiritual and cultural services
                  </p>
                </div>
              </div>
              <i class="fas fa-chevron-down seva-arrow"></i>
            </div>
            <div class="seva-content">
              <div class="seva-content-inner">
                <div class="seva-item">
                  <h4 class="seva-item-title">Cultural Mandap Seva</h4>
                  <p class="seva-item-description">
                    Support for cultural programs and mandap decoration
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(5001, 'Other Seva', 'Cultural Mandap Seva')"
                    >
                      5001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(10001, 'Other Seva', 'Cultural Mandap Seva')"
                    >
                      10001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(15001, 'Other Seva', 'Cultural Mandap Seva')"
                    >
                      15001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(25001, 'Other Seva', 'Cultural Mandap Seva')"
                    >
                      25001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(50001, 'Other Seva', 'Cultural Mandap Seva')"
                    >
                      50001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(150001, 'Other Seva', 'Cultural Mandap Seva')"
                    >
                      150001
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Krishna Kala Seva</h4>
                  <p class="seva-item-description">
                    Support for Krishna's cultural and artistic programs
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(2501, 'Other Seva', 'Krishna Kala Seva')"
                    >
                      2501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(5501, 'Other Seva', 'Krishna Kala Seva')"
                    >
                      5501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(7501, 'Other Seva', 'Krishna Kala Seva')"
                    >
                      7501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(10501, 'Other Seva', 'Krishna Kala Seva')"
                    >
                      10501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(15501, 'Other Seva', 'Krishna Kala Seva')"
                    >
                      15501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(51001, 'Other Seva', 'Krishna Kala Seva')"
                    >
                      51001
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Bhajan Sandhya Seva</h4>
                  <p class="seva-item-description">
                    Support for devotional singing and bhajan programs
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(2101, 'Other Seva', 'Bhajan Sandhya Seva')"
                    >
                      2101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(3101, 'Other Seva', 'Bhajan Sandhya Seva')"
                    >
                      3101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(5101, 'Other Seva', 'Bhajan Sandhya Seva')"
                    >
                      5101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(10101, 'Other Seva', 'Bhajan Sandhya Seva')"
                    >
                      10101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(15101, 'Other Seva', 'Bhajan Sandhya Seva')"
                    >
                      15101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(51001, 'Other Seva', 'Bhajan Sandhya Seva')"
                    >
                      51001
                    </button>
                  </div>
                </div>
                <div class="seva-item">
                  <h4 class="seva-item-title">Gau Seva</h4>
                  <p class="seva-item-description">
                    Sacred cow protection and care service
                  </p>
                  <p class="donation-label">Choose donation amount:</p>
                  <div class="donation-amounts">
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(101, 'Other Seva', 'Gau Seva')"
                    >
                      101
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(201, 'Other Seva', 'Gau Seva')"
                    >
                      201
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(501, 'Other Seva', 'Gau Seva')"
                    >
                      501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(1008, 'Other Seva', 'Gau Seva')"
                    >
                      1008
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(1501, 'Other Seva', 'Gau Seva')"
                    >
                      1501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(2501, 'Other Seva', 'Gau Seva')"
                    >
                      2501
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(5001, 'Other Seva', 'Gau Seva')"
                    >
                      5001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(10001, 'Other Seva', 'Gau Seva')"
                    >
                      10001
                    </button>
                    <button
                      class="donation-btn"
                      onclick="initiatePayment(15001, 'Other Seva', 'Gau Seva')"
                    >
                      15001
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="important-info">
          <div class="info-section">
            <h3>Tax Benefits</h3>
            <ul>
              <li>All donations are eligible for tax exemption under 80G</li>
              <li>Digital receipts will be sent to your email</li>
              <li>Keep receipts for tax filing purposes</li>
            </ul>
          </div>
          <div class="info-section">
            <h3>How Donations Help</h3>
            <ul>
              <li>Support beautiful deity decorations and ceremonies</li>
              <li>Provide prasadam to thousands of devotees</li>
              <li>Maintain temple facilities and programs</li>
              <li>Spread Krishna consciousness in the community</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="divine-joy-section">
      <div class="joy-container">
        <div class="joy-content">
          <h2 class="joy-title">EXPERIENCE DIVINE JOY</h2>

          <p class="joy-description">
            Join us in celebrating the birth of Lord Krishna — the
            All-Attractive One — and receive His boundless blessings. Let us
            come together, chant His names, serve the Lord, and uplift our
            hearts.
          </p>

          <div class="mantra-section">
            <div class="mantra-text">
              "HARE KRISHNA HARE KRISHNA<br />
              KRISHNA KRISHNA HARE HARE<br />
              HARE RAMA HARE RAMA<br />
              RAMA RAMA HARE HARE"
            </div>
          </div>
        </div>

        <div class="joy-image">
          <img
            src="https://hkmraipur.org/wp-content/uploads/2025/07/baby-krishna-sits-lotus-position-600nw-2466107905.webp"
            alt="Baby Krishna in lotus position"
          />
        </div>
      </div>
    </div>

    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    <script>
      function toggleSeva(header) {
        const content = header.nextElementSibling;
        const arrow = header.querySelector(".seva-arrow");
        const isActive = content.classList.contains("active");

        // Close all other open sevas
        document
          .querySelectorAll(".seva-content.active")
          .forEach((activeContent) => {
            if (activeContent !== content) {
              activeContent.classList.remove("active");
              const otherArrow =
                activeContent.previousElementSibling.querySelector(
                  ".seva-arrow"
                );
              otherArrow.classList.remove("fa-chevron-up");
              otherArrow.classList.add("fa-chevron-down");
            }
          });

        // Toggle current seva
        if (isActive) {
          content.classList.remove("active");
          arrow.classList.remove("fa-chevron-up");
          arrow.classList.add("fa-chevron-down");
        } else {
          content.classList.add("active");
          arrow.classList.remove("fa-chevron-down");
          arrow.classList.add("fa-chevron-up");
        }
      }

      // Payment functionality
      async function initiatePayment(amount, sevaType, sevaItem) {
        try {
          // Show loading state
          const button = event.target;
          const originalText = button.innerText;
          button.innerText = "Processing...";
          button.disabled = true;

          // Create order
          const response = await fetch(window.API_CONFIG.getApiUrl("/create-order"), {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount: amount,
              sevaType: sevaType,
              sevaItem: sevaItem,
            }),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || "Failed to create order");
          }

          // Initialize Razorpay
          const options = {
            key: data.key,
            amount: data.amount,
            currency: "INR",
            name: "Krishna Janmashtami Festival",
            description: `${sevaType} - ${sevaItem}`,
            order_id: data.order_id,
            handler: function (response) {
              verifyPayment(response, sevaType, sevaItem);
            },
            prefill: {
              name: "",
              email: "",
              contact: "",
            },
            theme: {
              color: "#d4b896",
            },
            modal: {
              ondismiss: function () {
                // Reset button state when payment is cancelled
                button.innerText = originalText;
                button.disabled = false;
              },
            },
          };

          const rzp = new Razorpay(options);
          rzp.open();

          // Reset button state
          button.innerText = originalText;
          button.disabled = false;
        } catch (error) {
          console.error("Payment error:", error);
          showNotification(
            "error",
            "Payment Error",
            "Unable to initiate payment. Please try again.",
            error.message
          );

          // Reset button state
          const button = event.target;
          button.innerText =
            button.getAttribute("data-original-text") || "₹" + amount;
          button.disabled = false;
        }
      }

      async function verifyPayment(response, sevaType, sevaItem) {
        try {
          const verifyResponse = await fetch(window.API_CONFIG.getApiUrl("/verify-payment"), {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyResponse.json();

          if (verifyData.success) {
            showNotification(
              "success",
              "Payment Successful! 🙏",
              `Thank you for your divine contribution to ${sevaType} - ${sevaItem}. Your devotion has been received with gratitude.`,
              `Payment ID: ${response.razorpay_payment_id}`
            );
          } else {
            showNotification(
              "error",
              "Payment Verification Failed",
              "There was an issue verifying your payment. Please contact our support team.",
              "Our team will assist you promptly."
            );
          }
        } catch (error) {
          console.error("Verification error:", error);
          showNotification(
            "error",
            "Verification Error",
            "Unable to verify payment due to a technical issue. Please contact support.",
            "Your payment may have been processed successfully."
          );
        }
      }

      // Modern notification system
      function showNotification(type, title, message, details = "") {
        // Remove any existing notifications
        const existingNotifications =
          document.querySelectorAll(".notification");
        existingNotifications.forEach((notification) => {
          notification.remove();
        });

        // Create notification element
        const notification = document.createElement("div");
        notification.className = `notification ${type}`;

        const icon = type === "success" ? "✅" : "❌";

        notification.innerHTML = `
          <div class="notification-header">
            <span class="notification-icon">${icon}</span>
            <span class="notification-title">${title}</span>
            <button class="notification-close" onclick="closeNotification(this)">×</button>
          </div>
          <div class="notification-body">${message}</div>
          ${details ? `<div class="notification-details">${details}</div>` : ""}
          <div class="notification-progress">
            <div class="notification-progress-bar"></div>
          </div>
        `;

        // Add to page
        document.body.appendChild(notification);

        // Show notification with animation
        setTimeout(() => {
          notification.classList.add("show");
        }, 100);

        // Auto-remove after 5 seconds
        setTimeout(() => {
          closeNotification(notification);
        }, 5000);
      }

      function closeNotification(element) {
        const notification = element.closest
          ? element.closest(".notification")
          : element;
        notification.classList.remove("show");
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        }, 400);
      }
    </script>

    <!-- Professional Hero Slider JavaScript -->
    <script>
      class HeroSlider {
        constructor() {
          this.slides = document.querySelectorAll(".slide");
          this.dots = document.querySelectorAll(".dot");
          this.progressBar = document.querySelector(".progress-bar");
          this.currentSlide = 0;
          this.isAutoPlaying = true;
          this.autoSlideInterval = null;
          this.progressInterval = null;
          this.slideInterval = 3500; // 3.5 seconds per slide
          this.isTransitioning = false;

          this.init();
        }

        init() {
          // Add click events to dots
          this.dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
              if (!this.isTransitioning) {
                this.goToSlide(index);
                this.resetAutoSlide();
              }
            });
          });

          // Start auto sliding
          this.startAutoSlide();
          this.startProgress();

          // Handle visibility change
          document.addEventListener("visibilitychange", () => {
            if (document.hidden) {
              this.pauseAutoSlide();
            } else {
              this.resumeAutoSlide();
            }
          });

          // Keyboard navigation
          document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") this.prevSlide();
            if (e.key === "ArrowRight") this.nextSlide();
          });
        }

        goToSlide(slideIndex) {
          if (this.isTransitioning || slideIndex === this.currentSlide) return;

          this.isTransitioning = true;

          // Remove active classes
          this.slides[this.currentSlide].classList.remove("active");
          this.dots[this.currentSlide].classList.remove("active");

          // Add smooth fade-out effect
          this.slides[this.currentSlide].classList.add("fade-out");

          // Update current slide
          this.currentSlide = slideIndex;

          // Add active class to new slide and dot with smooth fade-in
          setTimeout(() => {
            this.slides.forEach((slide) => slide.classList.remove("fade-out"));
            this.slides[this.currentSlide].classList.add("active");
            this.dots[this.currentSlide].classList.add("active");
          }, 150);

          // Clean up after transition
          setTimeout(() => {
            this.isTransitioning = false;
          }, 1200);

          this.resetProgress();
        }

        nextSlide() {
          if (this.isTransitioning) return;
          const nextIndex = (this.currentSlide + 1) % this.slides.length;
          this.goToSlide(nextIndex);
        }

        prevSlide() {
          if (this.isTransitioning) return;
          const prevIndex =
            (this.currentSlide - 1 + this.slides.length) % this.slides.length;
          this.goToSlide(prevIndex);
        }

        startAutoSlide() {
          this.autoSlideInterval = setInterval(() => {
            if (this.isAutoPlaying) {
              this.nextSlide();
            }
          }, this.slideInterval);
        }

        startProgress() {
          this.resetProgress();
          this.progressInterval = setInterval(() => {
            if (this.isAutoPlaying) {
              const currentWidth =
                parseFloat(this.progressBar.style.width) || 0;
              const increment = 100 / (this.slideInterval / 100);
              const newWidth = currentWidth + increment;

              if (newWidth >= 100) {
                this.resetProgress();
              } else {
                this.progressBar.style.width = newWidth + "%";
              }
            }
          }, 100);
        }

        resetProgress() {
          this.progressBar.style.width = "0%";
        }

        pauseAutoSlide() {
          this.isAutoPlaying = false;
        }

        resumeAutoSlide() {
          this.isAutoPlaying = true;
        }

        resetAutoSlide() {
          clearInterval(this.autoSlideInterval);
          clearInterval(this.progressInterval);
          this.startAutoSlide();
          this.startProgress();
        }
      }

      // Initialize slider when DOM is loaded
      let heroSlider;
      document.addEventListener("DOMContentLoaded", () => {
        heroSlider = new HeroSlider();
      });

      // Preload images for better performance
      window.addEventListener("load", () => {
        const imageUrls = [
          "https://hkmraipur.org/wp-content/uploads/2025/07/8.jpg",
          "https://hkmraipur.org/wp-content/uploads/2025/07/4-1.jpg",
          "https://hkmraipur.org/wp-content/uploads/2025/07/1-1.jpg",
          "https://hkmraipur.org/wp-content/uploads/2025/07/2.jpg",
          "https://hkmraipur.org/wp-content/uploads/2025/07/3.jpg",
          "https://hkmraipur.org/wp-content/uploads/2025/07/7.jpg",
          "https://hkmraipur.org/wp-content/uploads/2025/07/6.jpg",
        ];

        imageUrls.forEach((url) => {
          const img = new Image();
          img.src = url;
        });
      });
    </script>
  </body>
</html>
