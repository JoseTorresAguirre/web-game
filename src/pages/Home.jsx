import React from "react";
import bg from "../assets/bg-main.png";

const Home = () => {
  return (
    <div
      className="h-[100%] bg-cover bg-center mt-[10vh] "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <section className="h-[90vh] flex justify-center items-center">
        <div className="bg-[#2CD4E1] bg-opacity-10 h-3/4 w-3/4 flex mx-auto   rounded-[3rem]">
          <img
            src="https://res.cloudinary.com/dj3xwsle9/image/upload/v1733900240/268f0d8f-1ead-42b1-b4b2-4b7ab5e750cf.png"
            alt=""
            srcset=""
          />
        </div>
      </section>
      <section className="h-[40vh] flex justify-center items-center">
        <div className="bg-[#1B0089] h-[50%] w-[60vw] flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/dj3xwsle9/image/upload/v1733899865/8954947c-fa02-46f0-ac78-d643423712b4.png"
            alt="image"
            srcset=""
            className=""
          />
        </div>
      </section>
      <section className="h-[50vh] flex justify-center items-center">
        <div className="bg-[#1B0089] h-[100%] w-[80vw] flex justify-center items-center rounded-[1rem] px-[3rem]">
          <article className="w-[100%]">
            <div className="flex">
              <div className="bg-black h-[20vh] w-[25%]">
                <img
                  src="https://res.cloudinary.com/dj3xwsle9/image/upload/v1733899879/408d3462-885c-49cb-b113-565edd46e5f6.png"
                  alt="img"
                />
              </div>
              <div className="bg-black h-[20vh] w-[25%]">
                <img
                  src="https://res.cloudinary.com/dj3xwsle9/image/upload/v1733899893/64b9decc-152e-4f18-801d-02e7ca8d68f0.png"
                  alt="img"
                />
              </div>
              <div className="bg-black h-[20vh] w-[25%]">
                <img
                  src="https://res.cloudinary.com/dj3xwsle9/image/upload/v1733899926/30b601f3-3d45-46b6-b989-5cddc085371a.png"
                  alt="img"
                />
              </div>
              <div className="bg-black h-[20vh] w-[25%]">
                <img
                  src="https://res.cloudinary.com/dj3xwsle9/image/upload/v1733899942/63b9f85b-0ac2-4662-99a8-e59bdd5e4b15.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div>
                <h1 className="font-semibold text-[1rem] text-white mb-4">
                  Personaliza una ciudad unica
                </h1>
                <p className="whitespace-pre-wrape text-white text-[0.8rem]">
                  Conviertete en protagonista de tu propia ciudad mientras
                  diseñas y creas una hermosa metropolis llena de vida, con
                  negocios, parques y mucho mas con el juego de contruccion de
                  negocios mas popular. Participa en los desafios de diseño y
                  saca tu creatividad a relucir.
                </p>
              </div>
              <div>
                <h1 className="font-semibold text-[1rem] text-white mb-4">
                  Planificacion estrategica y gestion de recursos
                </h1>
                <p className="whitespace-pre-line text-white text-[0.8rem]">
                  Coloca negocios estrategicamente paramantener el flujo de
                  impuestos y el crecimiento. Resuelve retos como los atascos o
                  la contaminacion. Ofrece servicicos como centrales electricas
                  y comisarias de policia. Construye grandes avenidas y tranvias
                  para evitar atascos.
                </p>
              </div>
              <div>
                <h1 className="font-semibold text-[1rem] text-white mb-4">
                  Participa en eventos especiales
                </h1>
                <p className="whitespace-pre-line text-white text-[0.8rem]">
                  Desbloquea monumentos exclusivos o prueba la alta tecnologia
                  en ciudades del futuro. Desbloquea nuevas regiones como las
                  islas Soleadas o los Flordos helados, con estilos unicos. Las
                  nuevas temporadas del concurso traen recompesas unicas.
                </p>
              </div>
              <div>
                <h1 className="font-semibold text-[1rem] text-white mb-4">
                  Comercia, chatea, compite y unete a clubes.
                </h1>
                <p className="whitespace-pre-line text-white text-[0.8rem]">
                  Diseña estrategias ganadoras con los miembros de tu club y
                  declara la guerra a otras ciudades. Durante la batalla, lanza
                  increibles desastres a tus rivales, como el tornado. Consigue
                  recompensas valiosas que podras usar en la batalla o para
                  mejorar tu ciudad.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/* News Section */}
      <section className="h-auto py-16 flex justify-center items-center bg-[#140066]">
        <div className="w-[80vw] flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white mb-8 self-start">
            Últimas noticias
          </h2>
          <div className="grid grid-cols-3 gap-6 w-full">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#1B0089] rounded-lg overflow-hidden">
                <img
                  src={`/placeholder.svg?height=200&width=300`}
                  alt={`News ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-2">
                    Actualización disponible
                  </h3>
                  <p className="text-sm text-gray-300">
                    Descubre las nuevas características y mejoras en la última
                    actualización.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Form Section */}
      <section className="h-auto py-16 flex justify-center items-center bg-[#1B0089]">
        <div className="w-[60vw] flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white mb-8">
            No te pierdas nada de Challenge
          </h2>
          <form className="w-full space-y-4">
            <input
              type="text"
              placeholder="Nombre de usuario"
              className="w-full p-2 rounded bg-[#140066] text-white border-none"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-2 rounded bg-[#140066] text-white border-none"
            />
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-400" />
                <span className="text-sm text-white">
                  Acepto los términos y condiciones
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-400" />
                <span className="text-sm text-white">
                  Deseo recibir noticias y ofertas especiales
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#2CD4E1] text-black py-2 rounded hover:bg-opacity-90 transition-colors"
            >
              Registrarse
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
