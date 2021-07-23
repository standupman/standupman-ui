<script>
	function openTab(evt, tabName) {
		var i, tabContent, tabLinks;

		tabContent = document.getElementsByClassName('tabs-content');
		for (i = 0; i < tabContent.length; i++) {
			tabContent[i].style.display = 'none';
		}

		tabLinks = document.getElementsByClassName('tabs-link');
		for (i = 0; i < tabLinks.length; i++) {
			tabLinks[i].className = tabLinks[i].className.replace(' active-item', '');
		}

		document.getElementById(tabName).style.display = 'block';
		evt.currentTarget.className += ' active-item';
	}
</script>

<div class="breadcrumb">
	<p class="breadcrumb-item">Dashboard</p>
	<span>></span>
	<p class="breadcrumb-item text-primary">Teams</p>
</div>
<section class="teams-container">
	<div class="header">
		<p>Teams</p>
	</div>
	<div class="teams-inner-container">
		<div class="teams-list-sidebar">
			<p>Teams List</p>
			<ul>
				<li>
					<a href="" class="icon-left"><i class="fas fa-users" /> Team 1</a>
				</li>
				<li>
					<a href="" class="icon-left"><i class="fas fa-users" /> Team 2</a>
				</li>
				<li>
					<a href="" class="icon-left"><i class="fas fa-users" /> Team 3</a>
				</li>
				<li>
					<a href="" class="icon-left"><i class="fas fa-users" /> Team 4</a>
				</li>
				<li>
					<a href="" class="icon-left"><i class="fas fa-users" /> Team 5</a>
				</li>
			</ul>
		</div>
		<div class="teams-tab">
			<div class="tabs-menu">
				<p class="tabs-link" id="defaultOpen" onclick="openTab(event, 'members')">Members</p>
				<p class="tabs-link" onclick="openTab(event, 'standups')">Standups</p>
			</div>
			<div id="members" class="tabs-content">
				<div class="members-container">
					<div class="member-item">
						<div class="member-avatar">
							<img src="/user-img.jpg" alt="" />
						</div>
						<div class="member-info">
							<p class="name">Nfebe Noel(me)</p>
							<p class="email">nfebenoel@sevengps.com</p>
						</div>
					</div>
					<div class="member-item">
						<div class="member-avatar">
							<img src="/user-img.jpg" alt="" />
						</div>
						<div class="member-info">
							<p class="name">Jacob Jones</p>
							<p class="email">nfebenoel@sevengps.com</p>
						</div>
					</div>
					<div class="member-item">
						<div class="member-avatar">
							<img src="/user-img.jpg" alt="" />
						</div>
						<div class="member-info">
							<p class="name">Guy Hawkins</p>
							<p class="email">nfebenoel@sevengps.com</p>
						</div>
					</div>
					<div class="member-item">
						<div class="member-avatar">
							<img src="/user-img.jpg" alt="" />
						</div>
						<div class="member-info">
							<p class="name">Esther Howards</p>
							<p class="email">nfebenoel@sevengps.com</p>
						</div>
					</div>
					<div class="member-item">
						<div class="member-avatar">
							<img src="/user-img.jpg" alt="" />
						</div>
						<div class="member-info">
							<p class="name">Cameron Williamson</p>
							<p class="email">nfebenoel@sevengps.com</p>
						</div>
					</div>
				</div>
				<a href="#" id="add-member-btn" class="btn primary-btn icon-right u-margin-top-large"
					>Add New Member <i class="fas fa-plus" /></a
				>
			</div>
			<div id="standups" class="tabs-content">
				<table class="standups-table">
					<thead>
						<tr>
							<td>Name</td>
							<td>Description</td>
							<td>Complete time limit</td>
							<td>Frequency</td>
							<td>Actions</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>GPS Daily</td>
							<td>
								Et tellus dictum lacinia pellentesque eu diam. Suspendisse aliquam eu, montes, purus
								morbi. Enim vel.
							</td>
							<td>12 pm</td>
							<td>Daily</td>
							<td>
								<a href="">
									<i class="fas fa-pencil-alt text-primary" />
								</a>
								<a href="">
									<i class="fas fa-trash text-danger" />
								</a>
								<a href="">
									<i class="fas fa-check-double text-success" />
								</a>
							</td>
						</tr>
						<tr>
							<td>GPS Daily</td>
							<td>
								Et tellus dictum lacinia pellentesque eu diam. Suspendisse aliquam eu, montes, purus
								morbi. Enim vel.
							</td>
							<td>12 pm</td>
							<td>Daily</td>
							<td>
								<a href="">
									<i class="fas fa-pencil-alt text-primary" />
								</a>
								<a href="">
									<i class="fas fa-trash text-danger" />
								</a>
								<a href="">
									<i class="fas fa-check-double text-success" />
								</a>
							</td>
						</tr>
						<tr>
							<td>GPS Daily</td>
							<td>
								Et tellus dictum lacinia pellentesque eu diam. Suspendisse aliquam eu, montes, purus
								morbi. Enim vel.
							</td>
							<td>12 pm</td>
							<td>Daily</td>
							<td>
								<a href="">
									<i class="fas fa-pencil-alt text-primary" />
								</a>
								<a href="">
									<i class="fas fa-trash text-danger" />
								</a>
								<a href="">
									<i class="fas fa-check-double text-success" />
								</a>
							</td>
						</tr>
						<tr>
							<td>GPS Daily</td>
							<td>
								Et tellus dictum lacinia pellentesque eu diam. Suspendisse aliquam eu, montes, purus
								morbi. Enim vel.
							</td>
							<td>12 pm</td>
							<td>Daily</td>
							<td>
								<a href="">
									<i class="fas fa-pencil-alt text-primary" />
								</a>
								<a href="">
									<i class="fas fa-trash text-danger" />
								</a>
								<a href="">
									<i class="fas fa-check-double text-success" />
								</a>
							</td>
						</tr>
						<tr>
							<td>GPS Daily</td>
							<td>
								Et tellus dictum lacinia pellentesque eu diam. Suspendisse aliquam eu, montes, purus
								morbi. Enim vel.
							</td>
							<td>12 pm</td>
							<td>Daily</td>
							<td>
								<a href="">
									<i class="fas fa-pencil-alt text-primary" />
								</a>
								<a href="">
									<i class="fas fa-trash text-danger" />
								</a>
								<a href="">
									<i class="fas fa-check-double text-success" />
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</section>
