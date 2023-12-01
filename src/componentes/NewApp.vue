<template>
<iframe class='webPage' :src="newUrl" style="width:100%; height:100%;"></iframe>
</template>

<script lang="ts">
export default {
    props: {
        newUrl : {
            type: String,
            default: ""
        }

    }
}
</script>

<style>

</style>