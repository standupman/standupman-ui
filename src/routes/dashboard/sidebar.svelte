<script>
	import { session } from '$app/stores';
	import { post } from '$lib/utils.js';

  export let hideSideBar = false;

	async function logout() {
		await post(`auth/logout`);

		// this will trigger a redirect, because it
		// causes the `load` function to run again
		$session.user = null;
	}
</script>

<section class="sidebar" class:hide-sidebar={hideSideBar}>
	<div class="logo-box">
		<img src="/logo.svg" class="logo" alt="site-logo" />
	</div>

	<div class="sidebar-links-container">
		<div class="sidebar-links-group">
			<p class="heading">Dashboard</p>
			<ul>
				<li>
					<a class="icon-left" href="/dashboard"
						><img src="icons/icon-today.svg" alt="" />Dashboard</a
					>
				</li>
			</ul>
		</div>
		<div class="sidebar-links-group">
			<p class="heading">Standups</p>
			<ul>
				<li>
					<a class="icon-left" href="/dashboard/standups/create"
						><img src="icons/icon-feed.svg" alt="" />Create Standup</a
					>
				</li>
				<li>
					<a class="icon-left" href="/dashboard/standups/"
						><img src="icons/icon-posts.svg" alt="" />All standups</a
					>
				</li>
				<li>
					<a class="icon-left" href="/dashboard/standups/reports"
						><img src="icons/icon-routine.svg" alt="" />Reports</a
					>
				</li>
			</ul>
		</div>
		<div class="sidebar-links-group">
			<p class="heading">Teams</p>
			<ul>
				<li>
					<a class="icon-left" href="/dashboard/teams"
						><img src="icons/icon-people.svg" alt="" />New team</a
					>
				</li>
				<li>
					<a class="icon-left" href="/dashboard/teams"
						><img src="icons/icon-teams.svg" alt="" />My teams</a
					>
				</li>
			</ul>
		</div>
		<div class="sidebar-links-group">
			<p class="heading">Account</p>
			<ul>
				<li>
					<a class="icon-left" href="/dashboard/account"
						><img src="icons/icon-settings.svg" alt="" />Profile</a
					>
				</li>
				<li>
					<a class="icon-left" href="/dashboard/account/settings"
						><img src="icons/icon-settings.svg" alt="" />Settings</a
					>
				</li>
			</ul>
		</div>
		<button class="btn btn-danger icon-left sidebar-logout-btn" on:click={logout}
			><img src="icons/icon-logout.svg" alt="" />
			Logout</button
		>
	</div>
</section>
