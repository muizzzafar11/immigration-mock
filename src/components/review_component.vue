<template>
  <div class="col-md-4">
        <div class="card testimonial-card">
          <div class="card-body text-center">
            <div class="testimonial-icon">
              <svg height="100" width="100">
                <circle cx="50" cy="50" r="40" stroke="grey" stroke-width="3" fill="lightgrey" />
              </svg>
            </div>
            <div class="testimonial-stars mb-2">
              <!-- Inline SVG for star rating -->
              <!-- Repeat the <svg> block for each star you need -->
              <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.396.199-.853.015-1.052-.381a.609.609 0 0 0-.146-.695l-2.458-2.39a.609.609 0 0 0-.708-.106l-2.923 1.537a.609.609 0 0 0-.291.692l.858 2.986c.12.419.522.72.972.72.17 0 .342-.046.488-.136L8 13.034l6.256 3.287c.146.09.318.136.488.136.45 0 .852-.301.972-.72l.858-2.986a.609.609 0 0 0-.291-.692l-2.923-1.537a.609.609 0 0 0-.708.106l-2.458 2.39a.609.609 0 0 0-.146.695c.199.396.656.58 1.052.381L8 12.034l-4.388 2.409z"/>
              </svg> -->
              <img src="../assets/stars.png">
              <!-- ... -->
            </div>
            <h5 class="card-title">John Doe</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non posuere tellus, nec interdum sem. Proin ultrices ipsum vitae lobortis ante eu rhoncus. In scelerisque libero vulputate luctus pharetra.</p>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name: 'review_component'

}
</script>

<style>

</style>