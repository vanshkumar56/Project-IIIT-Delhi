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
  };

  return (
    <main className="create-page">
      <div className="create-modal-container">
        {/* Left Side Banner: Full Coverage Image */}
        <div className="create-side-banner">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
            alt="Students collaborating"
            className="create-banner-img"
          />

          <div className="create-banner-header">
            <button
              type="button"
              className="create-brand-pill"
              onClick={() => navigate("/login")}
              aria-label="Return to login"
            >
              <span className="create-brand-dot" />
              <strong>UniSkills</strong>
            </button>
          </div>
        </div>

        {/* Right Side Form Panel */}
        <section className="create-modal-content">
          <div className="create-card-heading">
            <h2>Your Next Opportunity Starts Here</h2>
            <p>
              Sign up to discover challenges, mentors, and careers built for
              you.
            </p>
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
            <span>OR</span>
          </div>

          <form className="create-form" onSubmit={handleSubmit}>
            <div className="create-field">
              <label htmlFor="create-name">Full Name *</label>
              <div className="create-input-wrap">
                <UserRound className="create-input-icon" size={17} />
                <input
                  id="create-name"
                  name="name"
                  type="text"
                  placeholder="Enter full name"
                  autoComplete="name"
                  value={form.name}
                  onChange={updateField}
                  required
                  minLength={2}
                />
              </div>
            </div>

            <div className="create-field">
              <label htmlFor="create-email">Email Address *</label>
              <div className="create-input-wrap">
                <Mail className="create-input-icon" size={17} />
                <input
                  id="create-email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  value={form.email}
                  onChange={updateField}
                  required
                />
              </div>
            </div>

            <div className="create-field">
              <label htmlFor="create-password">Create Password *</label>
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
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="create-field">
              <label htmlFor="create-confirm-password">
                Confirm Password *
              </label>
              <div className="create-input-wrap">
                <LockKeyhole className="create-input-icon" size={17} />
                <input
                  id="create-confirm-password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter password"
                  autoComplete="new-password"
                  value={form.confirmPassword}
                  onChange={updateField}
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  className="create-password-toggle"
                  onClick={() => setShowConfirmPassword((v) => !v)}
                  aria-label={
                    showConfirmPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
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
                By signing up, you accept the{" "}
                <a href="/terms">Terms of Service</a> and{" "}
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
                  Creating account...
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <div className="create-login-prompt">
            <span>Already registered?</span>
            <button type="button" onClick={() => navigate("/login")}>
              Sign in <ArrowUpRight size={13} />
            </button>
          </div>

          <div className="create-card-footer">
            <ShieldCheck size={15} />
            Safe & secure registration
          </div>
        </section>
      </div>
    </main>
  );
}

export default CreateAccount;