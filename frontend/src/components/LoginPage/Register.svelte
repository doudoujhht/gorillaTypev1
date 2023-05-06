<script >
    import Icon from "../utility/Icon.svelte"
    let gap = 3;
</script>

<section class="w-[240px] flex flex-col gap-{gap}">
    <h1>register</h1>
    <form class="flex flex-col gap-{gap}">
        <div>
            <input type="text" name="username" placeholder="username" class="w-full">
            <div class="indicator">

            </div>
        </div>
        <div>
            <input type="email" name="email" placeholder="email" class="w-full">
            <div class="indicator">

            </div>
        </div>
        <div>
            <input type="email" name="verifyEmail" placeholder="verify email" class="w-full">
            <div class="indicator">

            </div>
        </div>
        <div>
            <input type="password" name="password" placeholder="password" class="w-full">
            <div class="indicator">

            </div>
        </div>
        <div>
            <input type="password" name="verifyPassword" placeholder="verify password" class="w-full">
            <div class="indicator">

            </div>
        </div>

        <button class="flex justify-center w-full items-center login">
            <Icon>
                <i class="fas fa-user-plus"></i>
            </Icon>
            <span>
                Sign Up
            </span>
        </button>
    </form>
</section>

<style>
    section div, section button {
        border-radius: 0.5rem;
        height: 36px;
        display: flex;
        background-color:var(--sub-alt-color);
    }
    input{
        padding: 0.5rem;
        width: calc(100% - 36px);
        background-color: transparent;
    }
    input::placeholder{
        color: var(--sub-color);
    }
    input:focus, input:focus-visible{
        outline: none;
    }
    button:hover{
        background-color: var(--text-color);
        color: var(--sub-alt-color);
        transition: 125ms;
    }
    .indicator{
        width: 36px;
        border-radius: 0 0.5rem 0.5rem 0;
    }
</style>