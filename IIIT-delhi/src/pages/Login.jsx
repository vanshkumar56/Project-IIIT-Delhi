
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    // Connect your authentication API here.
    // This demo navigation does not authenticate the user.
    navigate("/dashboard");
  };

  const handleGoogleLogin = () => {
    setError("Google sign-in is not configured yet.");
    // Connect Google OAuth here when your authentication backend is ready.
  };

  return (
    <main className="login-page">
      <div className="login-shell">
        <header className="login-topbar">
          <div className="login-breadcrumb">
            <span className="status-dot" />
            <span>COLLEGIATE PORTAL</span>
            <span className="breadcrumb-divider">/</span>
            <span>UNIVERSAL SIGN-IN</span>
          </div>

          <span className="login-security">
            <span aria-hidden="true">♧</span> Secure Campus Access
          </span>
        </header>

        <div className="login-layout">
          {/* LEFT: BRANDING */}
          <section className="login-intro">
            <div className="login-brand">
              <div className="login-brand-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z"
                    fill="currentColor"
                    opacity=".2"
                  />
                  <path
                    d="M4 7.5 12 12l8-4.5M12 12v8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4 7.5 12 3l8 4.5-8 4.5-8-4.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <div>
                <h2 className="login-brand-name">UniSkills</h2>
                <p className="login-brand-subtitle">
                  Intercollegiate Network
                </p>
              </div>
            </div>

            <p className="login-eyebrow">Academic advancement platform</p>

            <h1 className="login-headline">
              Where ambition meets opportunity.
              <br />
              <span>Learn. Compete. Connect.</span>
            </h1>

            <p className="login-description">
              Develop practical skills, compete with students across colleges,
              connect with experienced mentors, and discover opportunities
              that move your career forward.
            </p>

            <div className="login-section-label">
              Your journey starts here
            </div>

            <div className="login-pillars">
              <article className="login-pillar">
                <div className="pillar-icon">↗</div>
                <h3>01. Learn</h3>
                <p>
                  Develop practical skills through guided learning and
                  real-world projects.
                </p>
              </article>

              <article className="login-pillar">
                <div className="pillar-icon pillar-icon-gold">✦</div>
                <h3>02. Compete</h3>
                <p>
                  Join hackathons, solve challenges, and climb the
                  leaderboard.
                </p>
              </article>

              <article className="login-pillar">
                <div className="pillar-icon pillar-icon-blue">◎</div>
                <h3>03. Connect</h3>
                <p>
                  Connect with alumni, mentors, and career opportunities.
                </p>
              </article>
            </div>

            <div className="login-quote">
              <div className="quote-stars" aria-label="Five stars">
                ★★★★★
              </div>

              <blockquote>
                Your next opportunity can start with one skill, one challenge,
                or one meaningful connection.
              </blockquote>

              <div className="quote-author">
                <div className="quote-avatar">U</div>
                <div>
                  <strong>The UniSkills Community</strong>
                  <span>Learn together. Go further.</span>
                </div>
              </div>
            </div>

            <div className="login-stats">
              <span>◈ Skill-based challenges</span>
              <span>◎ Campus communities</span>
              <span>↗ Career growth</span>
            </div>
          </section>

          {/* RIGHT: LOGIN FORM */}
          <section className="login-card">
            <div className="login-card-heading">
              <h2>Welcome to UniSkills</h2>
              <p>
                Sign in to access your learning and opportunities workspace.
              </p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="login-field">
                <div className="login-label-row">
                  <label htmlFor="login-email">Email address</label>
                </div>

                <div className="login-input-wrap">
                  <span className="login-input-icon" aria-hidden="true">
                    @
                  </span>

                  <input
                    id="login-email"
                    type="email"
                    className="login-input"
                    placeholder="you@university.edu"
                    autoComplete="username"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="login-field">
                <div className="login-label-row">
                  <label htmlFor="login-password">Password</label>

                  <button
                    type="button"
                    className="login-text-button"
                    onClick={() => navigate("/forgot-password")}
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="login-input-wrap">
                  <span className="login-input-icon" aria-hidden="true">
                    ◈
                  </span>

                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    className="login-input"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />

                  <button
                    type="button"
                    className="login-password-toggle"
                    onClick={() =>
                      setShowPassword((previous) => !previous)
                    }
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="login-options">
                <label className="login-remember">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(event) => setRemember(event.target.checked)}
                  />
                  <span>Remember this device</span>
                </label>

                <span className="login-protected">
                  ♧ Secure sign-in
                </span>
              </div>

              {error && (
                <div className="login-error" role="alert">
                  {error}
                </div>
              )}

              {/* Main login button: special candy effect */}
              <button type="submit" className="login-submit">
                <span>Sign In</span>
                <span className="login-submit-arrow" aria-hidden="true">
                  →
                </span>
              </button>
            </form>

            <div className="login-divider">
              <span>Or continue with</span>
            </div>

            {/* Google login button */}
            <button
              type="button"
              className="login-google-button"
              onClick={handleGoogleLogin}
            >
              <svg
                className="google-logo"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"
                />
                <path
                  fill="#34A853"
                  d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"
                />
                <path
                  fill="#FBBC05"
                  d="M12.6 27.7a12 12 0 0 1 0-7.4V15H5.8a20 20 0 0 0 0 17.9l6.8-5.2Z"
                />
                <path
                  fill="#EA4335"
                  d="M24 12.1c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6.1 29.5 4 24 4A20 20 0 0 0 5.8 15l6.8 5.3c1.6-4.8 6.1-8.2 11.4-8.2Z"
                />
              </svg>

              <span>Sign in with Google</span>
            </button>

            <div className="login-signup-box">
              <p>New to UniSkills?</p>

              <button
                type="button"
                className="login-text-button"
                onClick={() => navigate("/create-account")}
              >
                Create an account <span aria-hidden="true">→</span>
              </button>
            </div>

            <p className="login-privacy-note">
              <span aria-hidden="true">♧</span>
              Your account and data deserve privacy.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Login;
