/* "use client";

import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Page404 } from "../components/Page404";

export default function SuccesPage() {
  const { user } = useContext(UserContext);
  console.log(user);
  const renderDontUser = () => <Page404 />;
  const renderUser = () => (
    <>
      <div>
        <span>{user}</span>
      </div>
    </>
  );
  return <div>{user ? renderUser() : renderDontUser()}</div>;

 */
import guitar from "../assets/guitar.png";
import { CardResponse } from "../components/CardResponse";

export const metadata = {
  title: "Succes Page",
  description: "Pagina para informar al usuario el registro exitoso",
};

export default function SuccesPage() {
  return (
    <CardResponse image={guitar} title="¡Gracias por participar en el sorteo!" response="Tu Registro fue Exitoso" />
  );
}
