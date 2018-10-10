<template>
    <div class="swindow">
        <img :src="img" :alt="id">
        <h5 class="title">{{ title }}</h5>
    </div>
</template>
<script>
export default {
    props: [
        'img',
        'title',
        'id'
    ]
}
</script>

<style scoped>
.swindow {
    margin-top: 5px;
}
.swindow img {
    border-radius: 10px;
}
.swindow .title {
    margin: 0;
}
</style>

