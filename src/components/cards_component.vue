<template>
    <div class="col">
            <div class="card h-100">
                <img style="height: 250px;" :src=imagePath class="card-img-top" alt="News Image">
            <div style="min-height: 300px;" class="card-body">
                <h4 class="card-title my-3">{{ header }}</h4>
                <p class="card-text mt-4">{{ loremIpsum }}</p>
                <br>
                <a href="#" class="mt-5 text-danger">Learn More</a>
            </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'cards_component',
    props: {
        header: String,
        body: String,
        imagePath: String, 
        footer: String,
        footerLink: String,
    },
    data() {
        return {
            loremIpsum: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, elit ac aliquet sodales, lorem tortor pellentesque ante, eu semper ligula diam sit amet lacus. Cras ante nulla, commodo nec velit vehicula, posuere rutrum diam. Nullam nec ligula leo."
        }
    },
}
</script>

<style>

</style>