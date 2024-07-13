<script>
	import SideBar from './sidebar.svelte';

	let hideSideBar = false;
	let increaseContentSize = false;
	let hideUserDropdown = true;

	function toggleSideBar() {
		hideSideBar = !hideSideBar;
		increaseContentSize = !increaseContentSize;
	}

	function toggleUserDropdown() {
        hideUserDropdown = !hideUserDropdown;
		console.log('clicked ...')
	}
</script>

<main>
	<!-- Sidebar -->
	<SideBar hideSideBar="{hideSideBar}"/>

	<!-- Header -->
	<header class="dashboard-header" class:increase-width="{increaseContentSize}">
		<div class="header-items-container header-items-container-1">
			<p on:click={toggleSideBar} id="sidebar-toggle" class="sidebar-toggle-icon">
				<span>&nbsp;</span>
			</p>
			<div class="form-group">
				<input type="text" placeholder="Search.." class="header-search-input" />
				<i class="fas fa-search" />
			</div>
		</div>

		<div class="header-items-container header-items-container-2">
			<div class="user-cta-icons">
				<a href="/dashboard/account"><i class="fas fa-cog" /></a>
				<a href=""><span class="number-of-notifications">12</span><i class="fas fa-bell" /></a>
			</div>
			<div on:click="{toggleUserDropdown}" class="user-info">
				<div class="user-avatar-container" id="user-avatar-container">
					<img src="/user-img.jpg" alt=""/>
				</div>
				<div class="user-details">
					<p class="user-name">Fon E. Noel</p>
					<p class="user-job-title">Software Engineer</p>
				</div>
			</div>
		</div>
	</header>

	<!-- User Details Dropdowm -->
	<div class:hide-user-details-dropdown={hideUserDropdown} class="user-details-dropdown">
		<div class="user-avatar">
			<img src="/user-img.jpg" alt="" />
		</div>
		<div class="user-details">
			<p class="user-name">Fon E. Noel</p>
			<p>Admin User</p>
		</div>

		<div class="user-details-dropdown-cta-btns">
			<a href="/dashboard/" class="btn secondary-btn icon-left" id="setting"><i class="fas fa-cog" /> Settings</a
			>
			<a href="#" class="btn btn-danger icon-left"><i class="fas fa-sign-out-alt" /> Logout</a>
		</div>
	</div>

	<!-- Main Dashboard Content -->
	<section class="main-dashboard-content" class:increase-width="{increaseContentSize}">
		<slot />
	</section>
</main>

<style>
	@import '../../../static/css/styles.css';
</style>
