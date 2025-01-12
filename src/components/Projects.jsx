import { content } from "../Content"; // Importa o objeto de conteúdo
import React, { useState } from "react";

const Projects = () => {
  // Obtendo a Projects a partir do objeto content
  const { Projects } = content;

  const [currentIndex, setCurrentIndex] = useState(null); // Controle do índice do modal

  // Função para abrir o modal
  const openModal = (index) => {
    setCurrentIndex(index);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setCurrentIndex(null);
  };

  // Função para navegar para a imagem anterior
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Função para navegar para a próxima imagem
  const goToNext = () => {
    if (currentIndex < Projects.project_content.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col gap-5">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
        </div>

        {/* Projects de imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Projects.project_content.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={() => openModal(index)}
            >
              <img
                src={item.image}
                alt={`Imagem ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {currentIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative max-w-4xl w-full px-4">
              {/* Botão Fechar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-400"
              >
                &times;
              </button>

              {/* Imagem do Modal */}
              <img
                src={Projects.project_content[currentIndex].image}
                alt={`Imagem ${currentIndex + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
              />

              {/* Controles de Navegação */}
              <button
                onClick={goToPrevious}
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-2 rounded-full hover:bg-gray-500 ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentIndex === 0}
              >
                &larr;
              </button>
              <button
                onClick={goToNext}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-2 rounded-full hover:bg-gray-500 ${
                  currentIndex === Projects.project_content.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={currentIndex === Projects.project_content.length - 1}
              >
                &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
