<script lang="ts">
	import * as english from '../../../public/languages/english.json';
	import { onMount } from 'svelte';
	let words;
	let textElement;
	let caret;
	let activeWord = 0;
	let activeLetter = 0;
	let wordsElements: HTMLDivElement[] = [];
	let activeLetterElement: Element;
	let container;
	onMount(() => {
		let body = document.querySelector('body');
		window.addEventListener('keydown', handleInput);
	});

	const moveCaret = () => {
		activeLetterElement = wordsElements[activeWord]?.children[activeLetter];
		const rect = activeLetterElement?.getBoundingClientRect();
		const containerRect = container?.getBoundingClientRect();

		// Check if the current letter is the last one
		const isLastLetter = activeLetter === words[activeWord].length;

		let offsetX, offsetY;

		if (isLastLetter) {
			// If it's the last letter, add the width of the last letter to the offsetX
			const lastLetterRect =
				wordsElements[activeWord]?.children[
					activeLetter - 1
				]?.getBoundingClientRect();
			offsetX = (lastLetterRect?.right || 0) - containerRect?.left;
			offsetY = lastLetterRect?.top || 0;
		} else {
			offsetX = (rect?.left || 0) - containerRect?.left;
			offsetY = rect?.top || 0;
		}

		if (caret) {
			caret.style.left = `${offsetX - caret.offsetWidth + 0.1}px`;
			caret.style.top = `${offsetY - containerRect?.top}px`;
		}
	};

	// isWordCorrect checks if the word is correct
	function isWordCorrect(wordIndex) {
		if (activeWord <= wordIndex) {
			return true;
		}
		const wordElement = wordsElements[wordIndex];
		for (let i = 0; i < wordElement?.children.length; i++) {
			if (!wordElement.children[i].classList.contains('correct')) {
				return false;
			}
		}
		return true;
	}

	function getRandomWords(words): String[] {
		let randomWords = [];
		for (let i = 0; i < 100; i++) {
			let randomIndex = Math.floor(Math.random() * words.length);
			randomWords.push(words[randomIndex]);
		}
		return randomWords;
	}
	function handleInput(e) {
		if (e.key === 'Backspace') {
			if (activeWord <= 0 && activeLetter <= 0) return;
			if (activeLetter > 0) {
				activeLetter--;
				wordsElements[activeWord].children[
					activeLetter
				].classList.remove('correct');
				wordsElements[activeWord].children[
					activeLetter
				].classList.remove('incorrect');
				moveCaret();
			}
		} else if (e.key === ' ') {
			activeWord++;
			activeLetter = 0;
			moveCaret();
			e.preventDefault();
		} else if (e.key.length === 1) {
			if (isCorrectLetter(e.key)) {
				wordsElements[activeWord]?.children[
					activeLetter
				]?.classList.add('correct');
				activeLetter++;
				moveCaret();
			} else if (!isCorrectLetter(e.key) && e.key !== ' ') {
				wordsElements[activeWord]?.children[
					activeLetter
				]?.classList.add('incorrect');
				activeLetter++;
				moveCaret();
			}
		}
	}

	function isCorrectLetter(letter: String): Boolean {
		return letter === words[activeWord][activeLetter];
	}

	words = getRandomWords(english.words);
</script>

<main>
	<div
		class="text-sub-color flex text-3xl gap-4 relative flex-wrap"
		bind:this={container}
	>
		<div class="caret" bind:this={caret} />
		{#each words as word, index}
			<div
				class="word {activeWord === index
					? 'active'
					: ''} {isWordCorrect(index) ? '' : 'incorrect'}"
				bind:this={wordsElements[index]}
			>
				{#each word as letter}
					<span class="letter">{letter}</span>
				{/each}
			</div>
		{/each}
	</div>
</main>
<span
	class="opacity-0 word letter absolute w-fit text-3xl correct incorrect"
	bind:this={textElement}>A</span
>

<style>
	.letter {
		position: relative;
	}
	.letter.correct {
		color: var(--text-color);
	}
	.letter.incorrect {
		color: var(--error-color);
	}
	.word.incorrect {
		border-bottom: 2px solid var(--error-color);
		text-shadow: 1px 0 0 var(--bg-color), -1px 0 0 var(--bg-color),
			0 1px 0 var(--bg-color), 1px 1px 0 var(--bg-color),
			-1px 1px 0 var(--bg-color);
	}

	.caret {
		position: absolute;
		left: 0;
		width: 2.4px;
		height: 2.2rem;
		border-radius: 0.5rem;
		background-color: var(--caret-color);
		animation: blink 1s infinite;
	}
	@keyframes blink {
		0%,
		100% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
	}
</style>
