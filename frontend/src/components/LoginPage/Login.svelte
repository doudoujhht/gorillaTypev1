<script>
	import Icon from '../utility/Icon.svelte';
	import Modal from '../utility/Modal.svelte';
	let gap = 3;
	let remember = false;
	let isModalOpen = false;
</script>

<section class="w-[240px] flex flex-col gap-{gap}">
	<div class="exception flex justify-between items-end">
		<h1>Login</h1>
		<button
			class="text-[0.75rem] exception text-sub-color"
			on:click={() => (isModalOpen = true)}>Forgot password?</button
		>
	</div>
	<form class="flex flex-col gap-{gap}">
		<div>
			<input
				type="email"
				name="email"
				placeholder="email"
				class="w-full"
			/>
			<div class="indicator" />
		</div>
		<div>
			<input
				type="password"
				name="password"
				placeholder="password"
				class="w-full"
			/>
			<div class="indicator" />
		</div>
		<div
			class="exception flex justify-start items-center gap-2 cursor-pointer"
			on:click={() => (remember = !remember)}
		>
			<div
				class="w-[16px] h-[16px] flex items-center justify-center bg-sub-alt-color exception checkbox"
			>
				{#if remember}
					<Icon>
						<ion-icon
							name="checkbox"
							class="text-main-color font-bold"
						/>
					</Icon>
				{/if}
			</div>
			<span class="text-lg"> Remember me </span>
		</div>
		<button class="flex justify-center w-full items-center login">
			<Icon>
				<i class="fas fa-sign-in-alt" />
			</Icon>
			<span> Sign In </span>
		</button>
		<span class="w-full text-center">or</span>
		<button class="flex justify-center w-full items-center login">
			<Icon>
				<i class="fab fa-google" />
			</Icon>
			<span> Google Sign In </span>
		</button>
	</form>
</section>

{#if isModalOpen}
	<Modal
		close={() => (isModalOpen = false)}
		className="w-[400px] rounded-xl  p-[2rem] pb-[3rem] bg-bg-color flex flex-col gap-6"
	>
		<h1 class="text-sub-color text-[1.6rem]">Forgot Password</h1>
		<div class="modalInput">
			<input
				type="email"
				name="email"
				placeholder="Email"
				class="w-full"
			/>
			<div class="indicator" />
		</div>
		<button class="flex justify-center w-full items-center send">
			Send
		</button>
	</Modal>
{/if}

<style>
	section div:not(.exception),
	section button:not(.exception),
	.send,
	.modalInput {
		border-radius: 0.5rem;
		height: 36px;
		display: flex;
		background-color: var(--sub-alt-color);
	}
	input {
		padding: 0.5rem;
		width: calc(100% - 36px);
		background-color: transparent;
	}
	input::placeholder {
		color: var(--sub-color);
	}
	input:focus,
	input:focus-visible {
		outline: none;
	}
	.login:hover,
	.send:hover {
		background-color: var(--text-color);
		color: var(--sub-alt-color);
		transition: 125ms;
	}
	.indicator {
		width: 36px;
		border-radius: 0 0.5rem 0.5rem 0;
	}
	.checkbox {
		border-radius: 0.2rem;
	}
</style>
