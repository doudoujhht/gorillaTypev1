<!--
    FAQ - Frequently Asked Questions TailwindCSS Component
    with <details> and <summary> tag with custom [open] animation.
    Created by Surjith S M (@surjithctly)
    See more components: https://web3components.dev
-->

<script lang="ts">
    let open = true;
    export let title:string = 'you forgot the title';
</script>
<div on:click={()=>open = !open} class="flex  flex-col pb-3">
    <button class=" text-sub-color text-4xl text-left cursor-pointer hover:text-text-color">
        <button class="{open? '':'-rotate-90'} text-3xl">
            <i class="fas fa-chevron-down"></i>
        </button>
        <span>
            {title}
        </span>
    </button>
</div>
{#if open}
    <slot>you forgot the slot</slot>
{/if}
<style>
    button{
        transition: color 0.3s linear, transform 0.3s ease;
    }
</style>