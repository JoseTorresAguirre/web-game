import React from "react";
import bg from "../../../assets/bg-play.png";
import Godot from "../../../game/godot";
import GameChat from "../../../component/GameChat";

const NewGame = () => {
  const userNick = "UsuarioEjemplo";

  return (
    <div
      className="h-[90vh] bg-cover bg-center mt-[10vh] flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <section className="bg-[#10024D] bg-opacity-60 w-[80%] h-[90%] flex justify-center items-center rounded-[2rem]">
        <article className="bg-[#2CD4E1] bg-opacity-10 w-[60%] h-[80%] flex flex-col justify-center items-center">
          <Godot></Godot>
        </article>
        <article className="bg-white border-[2rem] w-[30%] h-[90%] ml-8">
          <GameChat></GameChat>
        </article>
      </section>
    </div>
  );
};

export default NewGame;
