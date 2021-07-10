import { DatePicker } from "antd";
import { useAuth } from "../hooks/useAuth";

import { AiFillControl } from "react-icons/ai";

import logoImg from "../assets/images/cash-control.svg";

import "../styles/panel.scss";

export function Panel() {
  const { user } = useAuth();

  return (
    <div id="page-panel">
      <header>
        <div className="content">
          <AiFillControl size={30} />
          <DatePicker  picker="month" format={"MM/YYYY"}/>
        </div>
      </header>

      <main>

        <div className="grid">
          <div className="table">
            <div className="card">
              <div className="cardHeader">
                <h3>Entradas</h3>
              </div>

              <div className="cardBody">
                <div className="tableResponsive">
                  <table width="100%">
                    <thead>
                      <tr>
                        <td>Título</td>
                        <td>Data</td>
                        <td>Valor</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Blabla</td>
                        <td>Blabla</td>
                        <td>BNBlalb</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="table">
            <div className="card">
              <div className="cardHeader">
                <h3>Saídas</h3>
              </div>

              <div className="cardBody">
                <div className="tableResponsive">
                  <table width="100%">
                    <thead>
                      <tr>
                        <td>Título</td>
                        <td>Data</td>
                        <td>Valor</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Blabla</td>
                        <td>Blabla</td>
                        <td>BNBlalb</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
