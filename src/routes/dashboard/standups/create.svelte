<div class="breadcrumb">
  <p class="breadcrumb-item">Dashboard</p>
  <span>></span>
  <p class="breadcrumb-item">Standups</p>
  <span>></span>
  <p class="breadcrumb-item text-primary">Add new</p>
</div>

<div class="add-new-standup-container">
  <div class="header">
    <p>Add a New Standup</p>
  </div>

  <div class="new-standup">
    <form class="standup-form">
      <div class="form-group u-margin-bottom-small">
        <label for="name">Name</label>
        <input id="name" type="text" placeholder="Enter Standup name Here" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Enter Description name Here"
        ></textarea>
      </div>
    </form>
    <div id="schedule" class="schedule">
      <p>Schedule</p>
      <div class="schedule-inputs-container">
        <div class="form-group">
          <i class="far fa-calendar-alt icon-left text-primary"></i>
          <input
            type="text"
            class="u-padding-left-medium"
            placeholder="Weekly"
          />
         <i class="fas fa-search icon-right text-gray"></i>
        </div>
        <div class="form-group">
          <i class="far fa-calendar-alt icon-left text-primary"></i>
          <input
            type="text"
            class="u-padding-left-medium"
            placeholder="Weekly"
          />
           <i class="fas fa-search icon-right text-gray"></i>
        </div>
        <div class="form-group">
         <i class="far fa-clock icon-left text-primary"></i>
          <input
            type="text"
            class="u-padding-left-medium"
            placeholder="Weekly"
          />
           <i class="fas fa-search icon-right text-gray"></i>
        </div>
      </div>
      <a href="" class="btn btn-outline-primary icon-left"
        ><i class="fas fa-plus text-primary"></i>
        Remind Me If I dont respond</a
      >
    </div>
  </div>
  <div class="questions-and-new-question-form-container">
    <p>Questions</p>
    <div class="questions-container">
      <ul>
        <li>
          <form action="#" class="question-form">
            <div class="form-header">
              <p>What did you do today?</p>
              <a class="form-dropdown-btn">
                <i class="fas fa-pencil-alt text-primary"></i>
              </a>
            </div>
            <div class="form-body hide">
              <div class="form-group u-margin-bottom-small">
                <label for="question-name">Question Name</label>
                <input
               class='questionaire'
                  type="text"
                  placeholder="Enter Standup name Here"
                />
              </div>
              <div class="form-group u-margin-bottom-small">
                <label for="question-type">Type</label>
                <select name="question-type" id="" class='questionaire'>
                  <option value="">Select a Type</option>
                </select>
              </div>
              <div class="u-margin-bottom-small">
                <input
                  type="submit"
                  value="Add"
                  class="form-submit-btn"
                />
              </div>
            </div>
          </form>
        </li>
        <li>
          <form action="#" class="question-form">
            <div class="form-header">
              <p>What challenges did you face?</p>
              <a class="form-dropdown-btn">
                 <i class="fas fa-pencil-alt text-primary"></i>
              </a>
            </div>
            <div class="form-body hide">
              <div class="form-group u-margin-bottom-small">
                <label for="question-name">Question Name</label>
                <input
                  type="text"
                  placeholder="Enter Standup name Here"
                />
              </div>
              <div class="form-group u-margin-bottom-small">
                <label for="question-type">Type</label>
                <select name="question-type" id="">
                  <option value="">Select a Type</option>
                </select>
              </div>
              <div class="u-margin-bottom-small">
                <input
                  type="submit"
                  value="Add"
                  class="form-submit-btn"
                />
              </div>
            </div>
          </form>
        </li>
        <li>
          <form action="#" class="question-form">
            <div class="form-header">
              <p>What do you intend to do tomorrow?</p>
              <a class="form-dropdown-btn">
                <i class="fas fa-pencil-alt text-primary"></i>
              </a>
            </div>
            <div class="form-body hide">
              <div class="form-group u-margin-bottom-small">
                <label for="question-name">Question Name</label>
                <input
                  type="text"
                  placeholder="Enter Standup name Here"
                />
              </div>
              <div class="form-group u-margin-bottom-small">
                <label for="question-type">Type</label>
                <select name="question-type" id="">
                  <option value="">Select a Type</option>
                </select>
              </div>
              <div class="u-margin-bottom-small">
                <input
                  type="submit"
                  value="Add"
                  class="form-submit-btn"
                />
              </div>
            </div>
          </form>
        </li>
        <li>
          <form action="#" class="question-form">
            <div class="form-header">
              <p>Add a new question</p>
              <a class="form-dropdown-btn">
                <i class="fas fa-chevron-down text-primary"></i>
              </a>
            </div>
            <div class="form-body">
              <div class="form-group u-margin-bottom-small">
                <label for="question-name">Question Name</label>
                <input
                  type="text"
                  placeholder="Enter Standup name Here"
                />
              </div>
              <div class="form-group u-margin-bottom-small">
                <label for="question-type">Type</label>
                <select name="question-type" id="">
                  <option value="">Select a Type</option>
                </select>
              </div>
              <div class="u-margin-bottom-small">
                <input
                  type="submit"
                  value="Add"
                  class="form-submit-btn"
                />
              </div>
            </div>
          </form>
        </li>
      </ul>
    </div>

    <div class="u-margin-top-large">
      <a href="" class="btn btn-outline-primary icon-left"
        ><i class="fas fa-plus text-primary"></i>
        Add questions</a
      >
    </div>
  </div>
  <div class="action-button-container">
    <a href="" class="btn btn-danger">Cancel</a>
    <a href="" class="btn primary-btn">Add &amp; Continue</a>
    <a href="" class="btn primary-btn">Add &amp; Finish</a>
  </div>
</div>