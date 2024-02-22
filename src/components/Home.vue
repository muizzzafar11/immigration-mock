<template>
    <div class="header-container text-center text-white d-flex justify-content-center align-items-center mb-5">
    <div>
      <h1 style="font-size: 60px;">Welcome to Globe Immigration</h1>
      <p style="font-size: 35px;">Canadian Immigration Advocates</p>
    </div>
  </div>


  <div class="py-1"></div>
  
  <!-- Second Section -->
  <div class="container my-5">
    <div class="row align-items-stretch">
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <div>
          <h1 style="font-size: 40px;">About Globe Immigration</h1>
          <br>
          <p style="font-size: 23px;">Globe Immigration assists with various Canadian visa applications and represents clients in immigration proceedings. Our services are tailored to each individual's needs.</p>
          <p style="font-size: 23px;">We uphold a tradition of contributing to Canada's prosperity by ensuring clients have access to top-notch legal representation.</p>
          <p style="font-size: 23px;">The team is committed to ongoing professional development to stay current with Canadian immigration law.</p>
        </div>
      </div>
      
      <div class="col-md-6 justify-content-center">
        <img style="max-height: 360px; width: 100%;" src="../assets/office.jpg" class="img-fluid" alt="Office">
      </div>
    </div>
  </div>


  <div class="py-1"></div>


  <!-- Third Section -->
  <div class="services-section my-5 py-5 text-center text-white">
    <div class="container py-5">
      <h1>Our Services</h1>
    </div>

    <div class="container mb-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
        <cards_component :imagePath="require('../assets/' + 'appeal-cases.webp' + '')" header="Appeal Cases"></cards_component>
        <cards_component :imagePath="require('../assets/' + 'multi-cultural.png' + '')" header="Immigration"></cards_component>
        <cards_component :imagePath="require('../assets/' + 'immigration-1.jpeg' + '')" header="Refugee & Protected Person"></cards_component>
        <cards_component :imagePath="require('../assets/' + 'settlement.jpeg' + '')" header="Citizenship"></cards_component>
        <cards_component :imagePath="require('../assets/' + 'arranged-employment.webp' + '')" header="Arranged Employment Opinion"></cards_component>
        <cards_component :imagePath="require('../assets/' + 'rolling-flag.jpeg' + '')" header="Status Change"></cards_component>
        </div>
    </div>

    <div>
      <!-- <button class="btn btn-danger px-5 py-3" style="background-color: #D80621;"><a href="/services">View All Our Services</a></button> -->
      <a href="#/services" class="btn btn-danger px-5 py-3" style="background-color: #D80621;" role="button">
        View All Our Services
      </a>
    </div>
  </div>


  <div class="py-1"></div>



    <!-- Fourth Section -->
    <div class="container my-5">
    <h2 class="text-center mb-4">News & Updates</h2>
    <div class="row g-4">
      <!-- News Item -->
      <div class="col-md-6">
        <div class="card ">
          <!-- Replace with your actual image path -->
          <img src="../assets/parliment.jpeg" class="card-img-top" alt="News Image">
          <div class="card-body text-center">
            <h5 class="card-title my-3">Major Changes to International Student Visas</h5>
            <p class="card-text mt-4">{{ loremIpsum }}</p>
            <a href="#" class="mt-5 text-danger">Read More</a>
            <!-- <a href="#" class="btn btn-primary">Read More</a> -->
          </div>
        </div>
      </div>
      <!-- Repeat for the second news item -->
      <div class="col-md-6">
        <div class="card">
          <!-- Replace with your actual image path -->
          <img src="../assets/throne-speech.avif" class="card-img-top" alt="News Image">
          <div class="card-body text-center">
            <h5 class="card-title my-3">Changes in Immigration policies in Ontario</h5>
            <p class="card-text mt-4">{{ loremIpsum }}</p>
            <a href="#" class="mt-5 text-danger">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div class="py-1"></div>

    <!-- Fifth Section -->
    <div class="container my-5">
    <h2 class="text-center mb-4">Customer Testimonials</h2>
    <div class="row">
      <!-- Start of testimonial card -->
      <review_component></review_component>
      <review_component></review_component>
      <review_component></review_component>
    </div>
  </div>
  </template>
  
  <script>
  import cards_component from './cards_component.vue';
import review_component from './review_component.vue';
  export default {
    name: 'home_page',
    components: {
        cards_component,
        review_component
    },
    data () {
        return {
            loremIpsum: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non posuere tellus, nec interdum sem. Proin ultrices ipsum vitae erat convallis convallis. Suspendisse cursus lobortis ante eu rhoncus. In scelerisque libero vulputate luctus pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non posuere tellus, nec interdum sem. Proin ultrices ipsum vitae erat convallis convallis. Suspendisse cursus lobortis ante eu rhoncus. In scelerisque libero vulputate luctus pharetra."
        }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .header-container {
  background: url('../assets/rolling-flag-2.png') no-repeat center center;
  background-size: cover; /* Ensure the image covers the container */
  height: 500px; /* Adjust the height as needed */
  width: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: white; /* Text color */
}

.services-section {
  background: url('../assets/toronto-2.png') no-repeat center center;
  background-size: cover;
  width: 100%;
  color: black; /* Text color */
}

.services-section h2 {
  margin-bottom: 1rem;
}

.card {
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
}

.card-title {
  color: #333; /* Dark text color for better readability */
}

.card-text {
  color: #555; /* Dark text color for readability */
}

/* Custom button styling if needed */
.btn-primary {
  background-color: #004085;
  border-color: #004085;
}

/* Ensure the background image covers the entire section */
@media (min-width: 992px) {
  .services-section {
    background-attachment: fixed;
  }
}

.testimonial-card {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
  }

  .testimonial-icon {
    margin: 0 auto 15px;
    display: flex;
    justify-content: center;
  }

  .testimonial-stars {
    color: #ffd700; /* Gold color for stars */
  }

  .card-img-top {
    /* Ensure the image covers the card's area */
    object-fit: cover;
    height: 200px; /* Fixed height for consistency */
  }
</style>
  