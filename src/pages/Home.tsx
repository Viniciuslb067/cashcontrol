import { useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import googleIconImg from "../assets/images/google-icon.svg";
import logoImg from "../assets/images/cash-control.png";

import "../styles/home.scss";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/control");
  }

  return (
    <div id="page-auth">
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo" />

          <button className="create-spent" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo Google" />
            Entrar com Google
          </button>
        </div>
      </main>
    </div>
  );
}
