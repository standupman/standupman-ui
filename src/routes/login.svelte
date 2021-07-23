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
            <form class="authentication-form">
              <p>Login</p>
              <div class="input-with-icon-form-group u-margin-bottom-small">
                <i class="fas fa-user text-primary"></i>
                <input type="text" placeholder="Username">
              </div>
              <div class="input-with-icon-form-group">
                <i class="fas fa-lock text-primary"></i>
                <input type="password" placeholder="Password">
              </div>
              <div class="remember-me-checkbox u-margin-top-extra-small u-margin-bottom-small">
                <input type="checkbox" name="" id="">
                <span>Remember me</span>
              </div>
              <input type="submit" value="Login" class="u-margin-bottom-small">
            </form>
             <p class="u-padding-bottom-small">Forgot password? <a href="" class="text-primary">Click Here</a></p>
              <p class="u-padding-bottom-small">Don't have an account? <a href="/register" class="text-primary">Register</a></p>
        </div>
    </section>
</main>