<script context="module">
	export async function load({ session }) {
		if (session?.user) {
			return {
				status: 302,
				redirect: '/dashboard'
			};
		}

		return {};
	}
</script>

<script>
  import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import { post } from '$lib/utils.js';

	let username = '';
	let password = '';
	let errors = null;

	async function submit(event) {
		const response = await post(`auth/login`, { username, password });

		// TODO handle network errors
		errors = response.errors;

		if (response.token) {
			$session.user = response.token;
			goto('/dashboard');
		}
	}
</script>

<style>
    @import '../../static/css/landing.css';
</style>

<main>
    <section class="authentification-page">
        <div class="authentication-page-illustration-img-container">
            <div class="welcome-message">
              <p>Welcome Back</p>
              <p>Nice to see you</p>
            </div>
            <img src="/authentication-pages-illustration.svg" alt="">
        </div>
        <div class="authentication-form-container">
            <div class="logo-box">
              <img src="/logo.svg" alt="">
            </div>
            <!-- login form -->
            <form class="authentication-form" on:submit|preventDefault={submit}>
              <p>Login</p>
              <div class="input-with-icon-form-group u-margin-bottom-small">
                <i class="fas fa-user text-primary"></i>
                <input type="text" placeholder="Username" bind:value={username}>
              </div>
              <div class="input-with-icon-form-group">
                <i class="fas fa-lock text-primary"></i>
                <input type="password" placeholder="Password" bind:value={password}>
              </div>
              <div class="remember-me-checkbox u-margin-top-extra-small u-margin-bottom-small">
                <input type="checkbox" name="" id="">
                <span>Remember me</span>
              </div>
              <button type="submit" class="btn primary-btn u-margin-bottom-small">
                Log In
              </button>
            </form>
             <p class="u-padding-bottom-small">Forgot password? <a href="" class="text-primary">Click Here</a></p>
              <p class="u-padding-bottom-small">Don't have an account? <a href="/register" class="text-primary">Register</a></p>
        </div>
    </section>
</main>