<script lang="ts">
    export let name: string;
</script>

<style>
    .parent {
        padding-left: 10%;
        padding-right: 10%;
    }
    .container {
        padding-left: 5%;
        padding-right: 5%;
    }
</style>

<div class="parent">
    <h2>{name}</h2>
    <hr>
    <div class="container">
        <slot></slot>
    </div>
</div>