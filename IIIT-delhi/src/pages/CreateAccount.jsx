
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import "../styles/CreateAccount.css";

function CreateAccount() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updateField = (event) => {
    const { name, value, checked, type } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (form.name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (form.password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Your passwords do not match. Please try again.");
      return;
    }

    if (!form.agree) {
      setError("Please accept the Terms of Service to continue.");
      return;
    }

    setLoading(true);

    // Demo flow only. Connect your registration API before production.
    window.setTimeout(() => {
      navigate("/basic-details", {
        state: {
          name: form.name.trim(),
          email: form.email.trim(),
        },
      });
    }, 450);
  };

  const handleGoogleSignup = () => {
    setError("Google sign-up is not configured yet.");
    // Connect your Google OAuth provider here.
  };

  return (
    <main className="create-page">
      <div className="create-shell">
        <header className="create-topbar">
          <button
            type="button"
            className="create-brand"
            onClick={() => navigate("/login")}
            aria-label="Return to UniSkills login"
          >
            <span className="create-brand-icon">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
            </span>

            <span className="create-brand-copy">
              <strong>UniSkills</strong>
              <small>Intercollegiate Network</small>
            </span>
          </button>

          <div className="create-header-right">
            <span className="create-header-label">
              Already have an account?
            </span>
            <button
              type="button"
              className="create-header-login"
              onClick={() => navigate("/login")}
            >
              Sign in <ArrowUpRight size={14} />
            </button>
          </div>
        </header>

        <div className="create-layout">
          <section className="create-intro">
            <div className="create-eyebrow">
              <span className="create-eyebrow-line" />
              YOUR NEXT CHAPTER STARTS HERE
            </div>

            <h1 className="create-headline">
              Make room for
              <br />
              <span>what you can become.</span>
            </h1>

            <p className="create-description">
              One account brings your skills, challenges, mentors, and
              opportunities together. Start building a future that goes
              beyond your classroom.
            </p>

            <div className="create-visual" aria-hidden="true">
              <div className="create-visual-glow" />
              <div className="create-orbit create-orbit-one" />
              <div className="create-orbit create-orbit-two" />

              <div className="create-visual-card">
                <div className="create-visual-card-top">
                  <span className="create-mini-logo">U</span>
                  <span className="create-mini-label">YOUR JOURNEY</span>
                  <span className="create-mini-menu">•••</span>
                </div>

                <div className="create-visual-heading">
                  <span>Your potential</span>
                  <strong>Starts here.</strong>
                </div>

                <div className="create-progress-label">
                  <span>Skills unlocked</span>
                  <strong>01 / ∞</strong>
                </div>

                <div className="create-progress-track">
                  <span />
                </div>

                <div className="create-visual-tags">
                  <span>Learn</span>
                  <span>Build</span>
                  <span>Grow ↗</span>
                </div>
              </div>

              <div className="create-floating-card create-floating-top">
                <span className="create-floating-icon">
                  <Sparkles size={16} />
                </span>
                <span>
                  <strong>New opportunities</strong>
                  <small>Waiting to be discovered</small>
                </span>
              </div>

              <div className="create-floating-card create-floating-bottom">
                <span className="create-floating-check">
                  <Check size={15} />
                </span>
                <span>
                  <strong>Made for your growth</strong>
                  <small>One step at a time</small>
                </span>
              </div>

              <span className="create-spark create-spark-one">✧</span>
              <span className="create-spark create-spark-two">✦</span>
              <span className="create-spark create-spark-three">✧</span>
            </div>

            <div className="create-benefits">
              <div className="create-benefit">
                <span className="create-benefit-number">01</span>
                <div>
                  <strong>Discover</strong>
                  <p>Find challenges that match your interests.</p>
                </div>
              </div>

              <div className="create-benefit">
                <span className="create-benefit-number">02</span>
                <div>
                  <strong>Develop</strong>
                  <p>Build practical skills through experience.</p>
                </div>
              </div>

              <div className="create-benefit">
                <span className="create-benefit-number">03</span>
                <div>
                  <strong>Move forward</strong>
                  <p>Connect learning with real opportunities.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="create-card">
            <div className="create-card-heading">
              <div className="create-step-label">
                <span className="create-step-dot" />
                STEP 1 OF YOUR JOURNEY
              </div>

              <h2>Create your account</h2>
              <p>Enter your details to get started with UniSkills.</p>
            </div>

            <button
              type="button"
              className="create-google-button"
              onClick={handleGoogleSignup}
            >
              <svg
                className="create-google-logo"
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

            <div className="create-divider">
              <span>Or create an account with email</span>
            </div>

            <form className="create-form" onSubmit={handleSubmit}>
              <div className="create-field">
                <label htmlFor="create-name">Full name</label>
                <div className="create-input-wrap">
                  <UserRound className="create-input-icon" size={17} />
                  <input
                    id="create-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    value={form.name}
                    onChange={updateField}
                    required
                    minLength={2}
                  />
                </div>
              </div>

              <div className="create-field">
                <label htmlFor="create-email">Email address</label>
                <div className="create-input-wrap">
                  <Mail className="create-input-icon" size={17} />
                  <input
                    id="create-email"
                    name="email"
                    type="email"
                    placeholder="you@university.edu"
                    autoComplete="email"
                    value={form.email}
                    onChange={updateField}
                    required
                  />
                </div>
              </div>

              <div className="create-field">
                <label htmlFor="create-password">Create password</label>
                <div className="create-input-wrap">
                  <LockKeyhole className="create-input-icon" size={17} />
                  <input
                    id="create-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="At least 8 characters"
                    autoComplete="new-password"
                    value={form.password}
                    onChange={updateField}
                    required
                    minLength={8}
                  />

                  <button
                    type="button"
                    className="create-password-toggle"
                    onClick={() => setShowPassword((value) => !value)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>
                <p className="create-password-hint">
                  Use at least 8 characters for your password.
                </p>
              </div>

              <div className="create-field">
                <label htmlFor="create-confirm-password">
                  Confirm password
                </label>
                <div className="create-input-wrap">
                  <LockKeyhole className="create-input-icon" size={17} />
                  <input
                    id="create-confirm-password"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter your password"
                    autoComplete="new-password"
                    value={form.confirmPassword}
                    onChange={updateField}
                    required
                    minLength={8}
                  />

                  <button
                    type="button"
                    className="create-password-toggle"
                    onClick={() =>
                      setShowConfirmPassword((value) => !value)
                    }
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                    aria-pressed={showConfirmPassword}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>
              </div>

              <label className="create-terms">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={updateField}
                />
                <span>
                  I agree to the <a href="/terms">Terms of Service</a> and{" "}
                  <a href="/privacy">Privacy Policy</a>.
                </span>
              </label>

              {error && (
                <div className="create-error" role="alert">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="create-submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="create-spinner" />
                    Preparing your account...
                  </>
                ) : (
                  <>
                    <span>Create Account</span>
                    <ArrowRight className="create-submit-arrow" size={17} />
                  </>
                )}
              </button>
            </form>

            <div className="create-login-prompt">
              <span>Already a UniSkills member?</span>
              <button type="button" onClick={() => navigate("/login")}>
                Sign in <ArrowUpRight size={13} />
              </button>
            </div>

            <div className="create-card-footer">
              <ShieldCheck size={16} />
              Your information stays yours.
            </div>
          </section>
        </div>

        <footer className="create-footer">
          <span>© {new Date().getFullYear()} UniSkills</span>
          <span className="create-footer-separator">·</span>
          <span>Learn. Compete. Connect.</span>
        </footer>
      </div>
    </main>
  );
}

export default CreateAccount;
