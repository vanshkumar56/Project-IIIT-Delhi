import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

   
    window.setTimeout(() => {
      navigate("/dashboard");
    }, 450);
  };

  const handleGoogleLogin = () => {
    setError("Google sign-in is not configured yet.");
  };

  return (
    <main className="login-page">
      <div className="login-modal-container">
       
        <div className="login-side-banner">
          <img
            src="blob:https://gemini.google.com/4d3b7bbb-bc98-49c0-b7f9-d74f108d0d41"
            alt="Students collaborating"
            className="login-banner-img"
          />

          <div className="login-banner-header">
            <button
              type="button"
              className="login-brand-pill"
              onClick={() => navigate("/login")}
              aria-label="Return to login"
            >
              <span className="login-brand-dot" />
              <strong>UniSkills</strong>
            </button>
          </div>
        </div>

        {/* Right Side Login Form */}
        <section className="login-modal-content">
          <div className="login-card-heading">
            <h2>Welcome Back to UniSkills</h2>
            <p>
              Sign in to access your learning and opportunities workspace.
            </p>
          </div>

          <button
            type="button"
            className="login-google-button"
            onClick={handleGoogleLogin}
          >
            <svg
              className="login-google-logo"
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
            Continue with Google
          </button>

          <div className="login-divider">
            <span>OR</span>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="login-field">
              <label htmlFor="login-email">Email Address *</label>
              <div className="login-input-wrap">
                <Mail className="login-input-icon" size={17} />
                <input
                  id="login-email"
                  type="email"
                  placeholder="name@example.com"
                  autoComplete="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="login-field">
              <div className="login-label-row">
                <label htmlFor="login-password">Password *</label>
                <button
                  type="button"
                  className="login-forgot-button"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot password?
                </button>
              </div>

              <div className="login-input-wrap">
                <LockKeyhole className="login-input-icon" size={17} />
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="login-options">
              <label className="login-remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span>Remember this device</span>
              </label>
            </div>

            {error && (
              <div className="login-error" role="alert">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="login-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="login-spinner" />
                  Signing in...
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <div className="login-signup-prompt">
            <span>New to UniSkills?</span>
            <button
              type="button"
              onClick={() => navigate("/create-account")}
            >
              Create an account <ArrowUpRight size={13} />
            </button>
          </div>

          <div className="login-card-footer">
            <ShieldCheck size={15} />
            Safe & secure sign-in
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;