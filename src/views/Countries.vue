<template>
    <b-container>
        <h1>Countries list</h1>
        <b-table striped hover :items="items"></b-table>
    </b-container>
</template>

<script>
    export default {
        name: "Countries",
        data () {
            return {
                items: [],
                loading: false,
            }
        },
        mounted () {
            this.loading = true
            this.axios
                .get('/countries')
                .then(response => {
                    this.items = response.data.payload
                })
                .catch(error => {
                    console.log(error)
                    this.items = []
                })
                .finally(() => this.loading = false)
        }
    }
</script>

<style scoped>

</style>
