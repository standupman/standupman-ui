<script context="module">
	export async function load({ session }) {
		if (session.user) {
			return {
				status: 302,
				redirect: '/'
			};
		}

		return {};
	}
</script>

<script>
	import { session } from '$app/stores';
	import { post } from '$lib/utils.js';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let confirmPassword = '';
	let userName = '';
	let firstName = '';
	let lastName = '';
	let errors = null;

	async function submit(event) {
		if (password !== confirmPassword) {
			errors = {
				password: 'Passwords do not match'
			};
			return;
		}

		const response = await post(`auth/register`, {
			email,
			password,
			full_name: `${firstName} ${lastName}`,
			userName
		});
		// TODO handle network errors
		errors = response.errors;

		if (response.token) {
			goto('/login');
		}
	}
</script>

<main>
	<section class="authentification-page">
		<div class="authentication-page-illustration-img-container">
			<div class="welcome-message">
				<p>Welcome</p>
				<p>Nice to see you</p>
			</div>
			<img src="/authentication-pages-illustration.svg" alt="" />
		</div>
		<div class="authentication-form-container">
			<div class="logo-box">
				<img src="/logo.svg" alt="" />
			</div>
			<!-- Registration form -->
			<form class="authentication-form" on:submit|preventDefault={submit}>
				<p>Register</p>
				<div class="input-with-icon-form-group u-margin-bottom-small">
					<i class="fas fa-user text-primary" />
					<input type="text" placeholder="Username" bind:value={userName} />
				</div>
				<div class="input-with-icon-form-group u-margin-bottom-small">
					<i class="fas fa-envelope text-primary" />
					<input type="text" placeholder="Email" bind:value={email} />
				</div>
				<div class="form-group-row u-margin-bottom-small">
					<div class="input-with-icon-form-group">
						<i class="fas fa-user text-primary" />
						<input type="text" placeholder="First name" bind:value={firstName} />
					</div>
					<div class="input-with-icon-form-group">
						<i class="fas fa-user text-primary" />
						<input type="text" placeholder="Last name" bind:value={lastName} />
					</div>
				</div>
				<div class="input-with-icon-form-group u-margin-bottom-small">
					<i class="fas fa-lock text-primary" />
					<input type="password" placeholder="Password" bind:value={password} />
				</div>
				<div class="input-with-icon-form-group u-margin-bottom-small">
					<i class="fas fa-lock text-primary" />
					<input type="password" placeholder="Confirm Password" bind:value={confirmPassword} />
				</div>

				<input type="submit" value="Register" class="u-margin-bottom-small" />
			</form>
			<a href="/" class="signin-with-google-link u-margin-bottom-large">
				<img src="/icons/icon-google.svg" alt="" />
				<span>Or sign-in with google</span>
			</a>
			<p class="u-padding-bottom-small">
				Already have an account? <a href="/login" class="text-primary">Sign in</a>
			</p>
		</div>
	</section>
</main>

<style>
	@import '../../static/css/landing.css';
</style>
