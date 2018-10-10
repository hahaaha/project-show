<template>
    <div class="detail">
        <div v-html="content"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            content: "<div style='color:red'>red</div>"
        }
    }
}
</script>

