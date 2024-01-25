<template>
    <section v-if="destination" class="destination">
        <div>
            <h2>{{ destination.name }}</h2>
        </div>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            destination: null
        }
    },
    computed:{
        destinationId(){
            return parseInt(this.$route.params.id)
        }
    },
    async created(){
        const result = await fetch(`https://my-json-server.typicode.com/cmckinnon6289/travel-app/destinations?slug=${this.$route.params.slug}`)
        this.destination = await result.json()
        console.log(this.destination);
        this.$watch(
            () => this.$route.params,
            async ()=>{
                const result = await fetch(`https://my-json-server.typicode.com/cmckinnon6289/travel-app/destinations?slug=${this.$route.params.slug}`)
                this.destination = await result.json()
            }
        )
    }
}
</script>