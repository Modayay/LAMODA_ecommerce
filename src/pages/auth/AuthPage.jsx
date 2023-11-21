import "./AuthPage.css";
import { app, auth } from "../../../config/firebaseConfig";
import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthPage = () => {
  const [GauthClicked, setGauthClicked] = useState(false);

  const handleGAuth = () => {
    setGauthClicked((prev) => !prev);
  };
  useEffect(() => {
    if (GauthClicked) {
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          console.log(error.message);
          // The email of the user's account used.
          console.log(error.customData.email);
          console.log(GoogleAuthProvider.credentialFromError(error));
        });
      setGauthClicked(false);
    }
  }, [GauthClicked]);

  return (
    <>
      <main>
        <div className="auth-left">
          <div className="auth-container">
            <div className="auth-heading">
              <h1>Fashion, culture & tastes</h1>
              <p>
                Log in or Sign up to your account here. Click Log In when
                you&apos;re done.
              </p>
            </div>
            <div className="auth-form">
              <div className="auth-input">
                <label>Email</label>
                <input
                  id="email"
                  type="text"
                  placeholder="eg.JohnLeenard@email.com"
                  required
                />
              </div>
              <div className="auth-input">
                <label>Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Must be at least 8 characters"
                  required
                />
              </div>

              <span>
                Don’t have an account yet? <a href="/">Sign in</a>
              </span>
              <div className="auth-cta">
                <button className="btn-secondary" id="loginBtn">
                  Log in
                </button>
                <span>or</span>
                <button
                  className="google-cta"
                  id="signIn-Google"
                  onClick={handleGAuth}
                >
                  <svg
                    className="svgGoogle"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.714 10.4599H21.8749V10.4166H12.4999V14.5833H18.3869C17.528 17.0088 15.2202 18.75 12.4999 18.75C9.04836 18.75 6.24992 15.9515 6.24992 12.5C6.24992 9.04842 9.04836 6.24998 12.4999 6.24998C14.0931 6.24998 15.5426 6.85102 16.6463 7.83279L19.5926 4.88644C17.7322 3.15258 15.2437 2.08331 12.4999 2.08331C6.74731 2.08331 2.08325 6.74738 2.08325 12.5C2.08325 18.2526 6.74731 22.9166 12.4999 22.9166C18.2525 22.9166 22.9166 18.2526 22.9166 12.5C22.9166 11.8015 22.8447 11.1198 22.714 10.4599Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M3.28442 7.65154L6.70682 10.1614C7.63286 7.86873 9.87557 6.24998 12.5 6.24998C14.0933 6.24998 15.5428 6.85102 16.6464 7.83279L19.5928 4.88644C17.7323 3.15258 15.2438 2.08331 12.5 2.08331C8.49901 2.08331 5.02922 4.34217 3.28442 7.65154Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M12.5 22.9167C15.1906 22.9167 17.6354 21.887 19.4839 20.2125L16.2599 17.4844C15.1789 18.3064 13.8581 18.7511 12.5 18.75C9.79062 18.75 7.4901 17.0224 6.62344 14.6115L3.22656 17.2286C4.95052 20.6021 8.45156 22.9167 12.5 22.9167Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M22.7141 10.4599H21.875V10.4167H12.5V14.5834H18.387C17.9762 15.7377 17.2361 16.7465 16.2583 17.4849L16.2599 17.4839L19.4839 20.212C19.2557 20.4193 22.9167 17.7084 22.9167 12.5C22.9167 11.8016 22.8448 11.1198 22.7141 10.4599Z"
                      fill="#1976D2"
                    />
                  </svg>
                  Google
                </button>
              </div>
            </div>
            <div className="auth-terms">
              <p>
                Logging in means you Agree to our Privacy Policy and Terms &
                conditions
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthPage;
