<script lang="ts">
    import * as english from "../../../public/languages/english.json"
    import {onMount} from "svelte";
    import {each} from "svelte/internal";
    let userText = "";
    // const characterPattern = /^[A-Za-z0-9\u00C0-\u017F]+$/;
    let isReady = false;
    let words;
    let textElement;
    let caret;
    let caretIndex = 0;
    let activeWord = 0;
    let activeLetter = 0;
    onMount(()=>{
        isReady = true;
        let body = document.querySelector("body")

        console.log(body)
        window.addEventListener("keydown", handleInput)
    })
    function getRandomWords (words):String[]{
        let randomWords = []
        for(let i = 0; i < 10; i++){
            let randomIndex = Math.floor(Math.random() * words.length)
            randomWords.push(words[randomIndex])
        }
        return randomWords
    }
    function handleInput(e){
        if (e.key.length === 1){
            userText += e.key
            caretIndex++
            // console.log(IsCorrectWord())
            caret.style.left = `${caretIndex * characterWidth}px`
        }

    }
    $:characterWidth = textElement?.clientWidth - 0.2;
    words = getRandomWords(english.words)
    function IsCorrectWord(){
        return words[activeWord] === userText
    }
</script>

<main>
    <div class="text-icon flex text-3xl gap-4 relative">
        <div class="caret" bind:this={caret}></div>
        {#each words as word, index}
            <div class="word {activeWord === index? 'active':''}" >
                <!--{#each word as letter, i}-->
                <!--    {#if (userText.length <= i)}-->
                <!--        <span class="letter text-sub-color">{letter}</span>-->
                <!--    {:else if (userText[i] === letter)}-->
                <!--        <span class="letter">{letter}</span>-->
                <!--    {:else}-->
                <!--        <span class="letter text-red-500">{letter}</span>-->
                <!--    {/if}-->
                <!--{/each}-->
            </div>
        {/each}
    </div>
</main>
<span class="opacity-0 absolute w-fit text-3xl" bind:this={textElement}>A</span>
<style>
    .letter{
        position: relative;
    }
    .caret{
        position: absolute;
        left: 0;
        width: 2.4px;
        border-radius: 0.5rem;
        height: 100%;
        background-color: var(--caret-color);
        animation: blink 1s infinite;
    }
    @keyframes blink {
        0%, 100%{
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }

</style>