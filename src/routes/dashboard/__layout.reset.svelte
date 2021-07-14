<style>
    @import '../../../static/css/styles.css';
</style>

<script>
	import SideBar from './sidebar.svelte'
</script>
<main>
	<!-- Sidebar -->
    <SideBar />

	<!-- Header -->
	<header class="dashboard-header">
	  <div class="header-items-container header-items-container-1">
		<p id="sidebar-toggle" class="sidebar-toggle-icon">
		  <span>&nbsp;</span>
		</p>
		<div class="form-group">
		  <input
			type="text"
			placeholder="Search.."
			class="header-search-input"
		  />
		  <i class="fas fa-search"></i>
		</div>
	  </div>

	  <div class="header-items-container header-items-container-2">
		<div class="user-cta-icons">
		  <a href="/dashboard/account"><i class="fas fa-cog"></i></a>
		  <a href=""
			><span class="number-of-notifications">12</span
			><i class="fas fa-bell"></i
		  ></a>
		</div>
		<div class="user-info">
		  <div class="user-avatar-container" id="user-avatar-container">
			<img src="/user-img.jpg" alt="" />
		  </div>
		  <div class="user-details">
			<p class="user-name">Nfebe Noel</p>
			<p class="user-job-title">Software Engineer</p>
		  </div>
		</div>
	  </div>
	</header>

	<!-- User Details Dropdowm -->
	<div class="user-details-dropdown hide-user-details-dropdown">
	  <div class="user-avatar">
		<img src="/user-img.jpg" alt="" />
	  </div>
	  <div class="user-details">
		<p class="user-name">Nfebe Noel</p>
		<p>Admin User</p>
	  </div>

	  <div class="user-details-dropdown-cta-btns">
		<a href="/dashboard/account" class="btn secondary-btn icon-left"
		  ><i class="fas fa-cog"></i> Settings</a
		>
		<a href="#" class="btn btn-danger icon-left"
		  ><i class="fas fa-sign-out-alt"></i> Logout</a
		>
	  </div>
	</div>

	<!-- Main Dashboard Content -->
	<section class="main-dashboard-content">
       <slot></slot>
	</section>
  </main>