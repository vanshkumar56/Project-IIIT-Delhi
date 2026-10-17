
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your registered email address.");
      return;
    }

    setLoading(true);

    // Demo-only request. Connect your password-reset API here.
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const handleResend = () => {
    setError("");
    setLoading(true);

    // Demo-only resend. Connect your password-reset API here.
    window.setTimeout(() => {
      setLoading(false);
    }, 900);
  };

  return (
    <main className="forgot-page">
      <div className="forgot-shell">
        <header className="forgot-topbar">
          <button
            type="button"
            className="forgot-brand"
            onClick={() => navigate("/login")}
            aria-label="Return to UniSkills login"
          >
            <span className="forgot-brand-icon" aria-hidden="true">
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
            </span>

            <span className="forgot-brand-copy">
              <strong>UniSkills</strong>
              <small>Intercollegiate Network</small>
            </span>
          </button>

          <div className="forgot-security">
            <span className="forgot-security-dot" />
            Secure Account Recovery
          </div>
        </header>

        <div className="forgot-layout">
          {/* LEFT: BRAND EXPERIENCE */}
          <section className="forgot-intro">
            <div className="forgot-eyebrow">
              <span className="forgot-eyebrow-line" />
              ACCOUNT RECOVERY
            </div>

            <h1 className="forgot-headline">
              Every great journey
              <br />
              deserves a <span>second chance.</span>
            </h1>

            <p className="forgot-description">
              Forgot your password? It happens. Let's get you back to
              learning, building skills, and discovering your next
              opportunity.
            </p>

            <div className="forgot-visual" aria-hidden="true">
              <div className="forgot-orbit forgot-orbit-one" />
              <div className="forgot-orbit forgot-orbit-two" />

              <div className="forgot-visual-glow" />

              <div className="forgot-lock-card">
                <div className="forgot-lock-top">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="forgot-lock-illustration">
                  <svg viewBox="0 0 120 120" fill="none">
                    <rect
                      x="25"
                      y="49"
                      width="70"
                      height="53"
                      rx="12"
                      fill="#718356"
                    />
                    <path
                      d="M39 50V38a21 21 0 0 1 42 0v12"
                      stroke="#718356"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    <circle cx="60" cy="70" r="7" fill="#F7F3EB" />
                    <path
                      d="M60 76v10"
                      stroke="#F7F3EB"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      d="m15 29 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z"
                      fill="#C5A36B"
                    />
                    <circle cx="101" cy="31" r="5" fill="#AAB7A0" />
                    <circle cx="99" cy="100" r="3" fill="#C5A36B" />
                  </svg>
                </div>

                <div className="forgot-visual-lines">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="forgot-floating-badge">
                <span className="forgot-check-icon">✓</span>
                <span>
                  <strong>Your account</strong>
                  <small>Worth protecting</small>
                </span>
              </div>

              <div className="forgot-floating-spark spark-one">✦</div>
              <div className="forgot-floating-spark spark-two">✧</div>
            </div>

            <div className="forgot-benefits">
              <div className="forgot-benefit">
                <span className="forgot-benefit-icon">01</span>
                <div>
                  <strong>Simple recovery</strong>
                  <p>Just your registered email address.</p>
                </div>
              </div>

              <div className="forgot-benefit">
                <span className="forgot-benefit-icon">02</span>
                <div>
                  <strong>Back to your goals</strong>
                  <p>Your next opportunity is waiting.</p>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT: RESET FORM */}
          <section className="forgot-card" aria-live="polite">
            {!submitted ? (
              <div className="forgot-form-view" key="recovery-form">
                <div className="forgot-card-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="m5 7 7 5 7-5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.5 3v4m-2-2h4"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <p className="forgot-card-eyebrow">LET'S GET YOU BACK</p>

                <h2 className="forgot-card-title">Forgot password?</h2>

                <p className="forgot-card-description">
                  Enter the email address associated with your account.
                  We'll help you reset your password.
                </p>

                <form onSubmit={handleSubmit} className="forgot-form">
                  <div className="forgot-field">
                    <label htmlFor="recovery-email">Email address</label>

                    <div className="forgot-input-wrap">
                      <span aria-hidden="true">@</span>
                      <input
                        id="recovery-email"
                        type="email"
                        placeholder="you@university.edu"
                        autoComplete="email"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                          setError("");
                        }}
                        required
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="forgot-error" role="alert">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="forgot-submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="forgot-spinner" />
                        Sending request...
                      </>
                    ) : (
                      <>
                        <span>Send reset link</span>
                        <span className="forgot-submit-arrow">→</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="forgot-help">
                  <span className="forgot-help-icon">i</span>
                  <p>
                    Make sure you use the email address you registered
                    with on UniSkills.
                  </p>
                </div>

                <button
                  type="button"
                  className="forgot-back-button"
                  onClick={() => navigate("/login")}
                >
                  <span aria-hidden="true">←</span>
                  Back to sign in
                </button>
              </div>
            ) : (
              <div className="forgot-success-view" key="recovery-success">
                <div className="forgot-success-icon">
                  <svg viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="28" fill="#EAF0E3" />
                    <path
                      d="m19 32 9 9 18-19"
                      stroke="#5D7045"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <p className="forgot-card-eyebrow">REQUEST RECEIVED</p>

                <h2 className="forgot-card-title">Check your inbox.</h2>

                <p className="forgot-card-description">
                  If an account exists for this email address, you'll
                  receive instructions to reset your password.
                </p>

                <div className="forgot-email-preview">
                  <span className="forgot-email-icon">@</span>
                  <span>{email}</span>
                </div>

                <div className="forgot-success-note">
                  <strong>Didn't receive an email?</strong>
                  <p>
                    Check your spam folder or try requesting another
                    reset link.
                  </p>
                </div>

                <button
                  type="button"
                  className="forgot-submit"
                  onClick={handleResend}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="forgot-spinner" />
                      Requesting...
                    </>
                  ) : (
                    <>
                      <span>Resend reset link</span>
                      <span className="forgot-submit-arrow">↻</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  className="forgot-back-button"
                  onClick={() => navigate("/login")}
                >
                  <span aria-hidden="true">←</span>
                  Back to sign in
                </button>

                <button
                  type="button"
                  className="forgot-edit-email"
                  onClick={() => {
                    setSubmitted(false);
                    setError("");
                  }}
                >
                  Use a different email address
                </button>
              </div>
            )}

            <div className="forgot-card-footer">
              <span className="forgot-footer-shield">✓</span>
              Your account security matters to us.
            </div>
          </section>
        </div>

        <footer className="forgot-footer">
          <span>© {new Date().getFullYear()} UniSkills</span>
          <span className="forgot-footer-separator">·</span>
          <span>Learn. Compete. Connect.</span>
        </footer>
      </div>
    </main>
  );
}

export default ForgotPassword;
