<script lang="ts">
    export let className = '';
    export let close;
</script>
<section class="h-screen w-screen bg-opacity-60 bg-[black] absolute top-0 grid place-items-center" on:click|self={()=>close()}>
    <div class="{className}">
        <slot/>
    </div>
</section>

<style>

</style>





