<template>
    <b-navbar toggleable="md" type="dark" variant="info">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand>Championship</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item to="/countries">Countries</b-nav-item>
                <b-nav-item to="/teams">Teams</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                    <template slot="button-content">
                        <em>Create</em>
                    </template>
                    <b-dropdown-item href="/country/create">Country</b-dropdown-item>
                    <b-dropdown-item href="/team/create">Team</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
