<script lang="ts">
    export let title ="forgot the title";
    export let description = "forgot the description";
    export let buttons:string[] = [];
</script>

<div class="flex flex-col gap-1">
    <div class=" text-sub-color text-xl flex items-center gap-3">
        <slot name="icon"></slot>
        <h3 class="">{title}</h3>
    </div>

    <div class="flex justify-between">
        <p class="w-[70%] text-lg">{description}</p>
        <div class="flex w-[28%] gap-2 buttons">
            {#each buttons as button}
                <button>{button}</button>
            {/each}
        </div>
    </div>

</div>

<style>
    button{
        height: 36px;
        width: 100%;
        border-radius: 7px;
        background-color: var(--sub-alt-color);
        transition: 0.125s;
    }
    button:hover{
        background-color: var(--text-color);
        color: var(--sub-alt-color);
    }
    .buttons button:first-child{
        background-color: var(--main-color);
        color: var(--sub-alt-color);
    }
</style>