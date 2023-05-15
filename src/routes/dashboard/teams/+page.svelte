<script>
    let activeTab = 0;
    let showInviteModal = false;
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
				<p class:active-item={ activeTab === 0 } on:click="{() => activeTab = 0 }"  class="tabs-link">Members</p>
				<p class:active-item={ activeTab === 1 } on:click="{() => activeTab = 1 }" class="tabs-link" >Standups</p>
			</div>
            {#if activeTab === 0}
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
				<a on:click="{() => showInviteModal = true}" id="add-member-btn" class="btn primary-btn icon-right u-margin-top-large"
					>Add New Member <i class="fas fa-plus" /></a
				>
			</div>
            {/if}
            {#if activeTab === 1}
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
            {/if}
		</div>
	</div>
</section>

<div class:show={showInviteModal} class="invite-member-modal">
    <div class="close-modal">
        <button on:click="{() => showInviteModal = false }" class="close-icon"><i class="fa fa-times"></i></button>
    </div>
    <form action="" class="invite-member-form">
        <p class="text-primary u-padding-bottom-small">Invite a user to join the team</p>
        <div class="form-group u-margin-bottom-small ">
            <label for="select-team">Select a team</label>
            <select name="select-team" id="">
                <option value="Team 1">Team 1</option>
                <option value="Team 2">Team 2</option>
                <option value="Team 3">Team 3</option>
                <option value="Team 4">Team 4</option>
                <option value="Team 5">Team 5</option>
            </select>
        </div>
        <div class="form-group">
            <label for="select-team">Enter email addresses</label>
           <textarea name="" cols="30" rows="10">
                
           </textarea>
        </div>
        <p class="u-margin-bottom-small">
            Your colleagues will received mail to enter this
        </p> 
        <div class="form-group">
            <a href="" class="btn primary-btn icon-right">Send invitation <i class="fas fa-paper-plane"></i></a>
        </div>
    </form>
     <div class="invite-sent-popup">
        <span class="close-icon"><i class="fa fa-times"></i></span>
        <p>Updated</p>
        <p>An invitation has been sent to <span class="text-primary">nest@gmail.com</span></p>
    </div>
</div>


