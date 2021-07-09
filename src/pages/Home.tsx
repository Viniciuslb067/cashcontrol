import googleIconImg from "../assets/images/google-icon.svg";
import logoImg from "../assets/images/cash-control.png";

import "../styles/home.scss";

export function Home() {

  async function handleCreateRoom() {
    
  }

  return (
    <div id="page-auth">
      <main>
        <div className="main-content">

          <img src={logoImg} alt="Logo" />

          <button className="create-spent">
            <img src={googleIconImg} alt="Logo Google" />
            Entrar com Google
          </button>
        </div>
      </main>
    </div>
  );
}
