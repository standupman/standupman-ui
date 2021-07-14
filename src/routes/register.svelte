<style>
    @import '../../static/css/styles.css';
</style>

<main>
    <section class="authentification-page">
      <div class="authentication-page-illustration-img-container">
        <div class="welcome-message">
          <p>Welcome</p>
          <p>Nice to see you</p>
        </div>
        <img
          src="/authentication-pages-illustration.svg"
          alt=""
        />
      </div>
      <div class="authentication-form-container">
        <div class="logo-box">
          <img src="/logo.svg" alt="" />
        </div>
        <!-- Registration form -->
        <form class="authentication-form">
          <p>Register</p>
          <div class="input-with-icon-form-group u-margin-bottom-small">
            <i class="fas fa-envelope text-primary"></i>
            <input type="text" placeholder="Email" />
          </div>
          <div class="form-group-row u-margin-bottom-small">
            <div class="input-with-icon-form-group">
              <i class="fas fa-user text-primary"></i>
              <input type="text" placeholder="First name" />
            </div>
            <div class="input-with-icon-form-group">
             <i class="fas fa-user text-primary"></i>
              <input type="text" placeholder="Last name" />
            </div>
          </div>
          <div class="input-with-icon-form-group u-margin-bottom-small">
            <i class="fas fa-lock text-primary"></i>
            <input type="password" placeholder="Password" />
          </div>
          <div class="input-with-icon-form-group u-margin-bottom-small">
             <i class="fas fa-lock text-primary"></i>
            <input type="password" placeholder="Confirm Password" />
          </div>

          <input
            type="submit"
            value="Register"
            class="u-margin-bottom-small"
          />
        </form>
        <a href="" class="signin-with-google-link u-margin-bottom-large">
            <img src="/icons/icon-google.svg" alt="">
            <span>Or sign-in with google</span>
        </a>
        <p class="u-padding-bottom-small">
          Already have an account? <a href="" class="text-primary">Sign in</a>
        </p>
      </div>
    </section>
  </main>