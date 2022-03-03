<template>
    <div class="header">
        <div class="header-container row">
            <!-- <a href="#">View Users</a>
            <a href="#">View Listings</a> -->
            <button @click.native="toggleAddUserView()" class="new-user-btn">Add User</button>
            <button @click.native="toggleAddListingView()" class="new-listing-btn">Add Listing</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    methods: {
        toggleAddUserView() {
            this.$emit('toggle-add-user-view');
            console.log('Sent toggle-add-user-view');
        },
        toggleAddListingView() {
            this.$emit('toggle-add-listing-view');
            console.log('Sent toggle-add-listing-view')
        }
    }
}
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    height: 4.5rem;
    width: 100%;
    background-color: rgb(212, 71, 71);
    overflow: hidden;
    z-index: 2;
}

/* Large Screens */
.header-container {
    margin-top: 0.5rem;
    justify-content: flex-end;
}

.header-container * {
    display: block;
    margin: 0.5rem;

    /* Font */
    font-weight: 500;
    text-decoration: none;
    color: white;
    font-size: 1rem;
}

.header-container a {
    margin-top: 1rem;
}

.header-container a:hover {
    color: black;
}

.new-user-btn, .new-listing-btn {
    color: black;
    background-color: white;
    border: none;
    text-decoration: none;
    border-radius: 12px;
    padding: 0.5rem;
    margin-top: 0.75rem;
}

.new-user-btn:hover, .new-listing-btn:hover {
    background-color: rgb(165, 165, 165);
    color: white;
}

.new-user-btn:active, .new-listing-btn:active {
    background-color: black;
}

</style>