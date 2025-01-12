// Importações necessárias
import { createElement, useState } from "react";
import { content } from "../Content"; // Certifique-se de que o arquivo tem a estrutura correta
import Modal from "react-modal"; // Biblioteca de modal

// Estilos personalizados para o modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};

// Configuração do elemento raiz do modal
Modal.setAppElement("#root");

// Componente principal
const Skills = () => {
  // Estados para controle do modal
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectJob, setSelectJob] = useState(null);

  // Abrir modal
  function openModal() {
    setIsOpen(true);
  }

  // Fechar modal
  function closeModal() {
    setIsOpen(false);
  }

  // Acessando dados de `content`
  const { skills, jobs } = content;

  return (
    <section
      className="flex flex-col md:flex-row items-center md:items-start"
      id="skills"
    >
      {/* Seção Skills */}
      <div className="w-full md:w-1/2 bg-violet-900">
        <div className="md:container px-5 py-14">
          <h2 className="title" data-aos="fade-down">
            {skills?.title || "Título não encontrado"}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {skills?.subtitle || "Subtítulo não encontrado"}
          </h4>
          <br />
          <div className="flex flex-wrap gap-4 justify-center">
            {skills?.skills_content?.map((skill, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 400}
                className="relative group w-full flex items-center text-center
                  gap-5 p-2 max-w-[100px] rounded-md border-2 border-slate-200"
              >
                <div>
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    title={skill.name}
                    className="w-10 group-hover:scale-125 duration-200"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seção Jobs */}
      <div className="w-full md:w-1/2 p-4">
        {/* Modal */}
        <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={customStyles}
>
  <div className="flex items-center gap-2">
    <img className="h-10" src={selectJob?.logo} alt="Logo da empresa" />
    <h6>{selectJob?.empresa || "Empresa não definida"}</h6>
  </div>
  <br />
  <ul className="list-disc px-4 font-Poppins sm:text-xs">
    {selectJob?.empresa === "Multitel Telecomunicações" ? (
      <>
        <li>Criação de artes (Redes sociais e comunicação interna)</li>
        <li>Materiais gráficos para impressão de grande porte (banners, painéis, outdoors,)</li>
        <li>Elaboração de apresentações (institucionais e comerciais)</li>
        <li>Desenvolvimento de interfaces de usuário (UI)</li>
        <li>Produção e edição de vídeos</li>
        <br/>
        <li>Desenv. de briefings para alinhamento de objectivos e estratégias.</li>
        <li>Planejamento estratégico de marketing.</li>
        <li>Direcção de arte em projectos, garantir consistência visual e qualidade.</li>
        <li>Pesquisa de mercado.</li>
        <br/>
        <li>Criação de maquetes 3D para eventos e exposição.</li>
        <li>Desenv. de protótipos e simulações visuais para apresentações e validação de conceitos.</li>
        <br/>
        <li>Comunicação directa com parceiros.</li>
        <li>Suporte criativo à equipe de TI em projectos integrados de design e tecnologia.</li>
        <li>Contribuição em campanhas de endomarketing.</li>
      </>
    ) : selectJob?.empresa === "Iberdomótica" ? (
      <>
        <li>Desenvolvimento e customização de soluções em WordPress.</li>
        <li>Criação de dashboards internos com design funcional e intuitivo.</li>
        <li>Implementação de medidas de segurança para garantir a proteção do sistema e a experiência segura do cliente final.</li>
        <li>Testes e validações contínuas.</li>
        <li>Suporte técnico e melhorias pós-implantação.</li>
      </>
    ) : (
      selectJob?.responsibilities?.map((item, index) => <li key={index}>{item}</li>)
    )}
  </ul>
</Modal>

        {/* Conteúdo dos jobs */}
        <div className="md:container px-5 py-10">
          <h2 className="title" data-aos="fade-down">
            {jobs?.title || "Título não encontrado"}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {jobs?.subtitle || "Subtítulo não encontrado"}
          </h4>
          <br />
          <div className="flex flex-wrap gap-4 justify-center">
            {jobs?.jobs_content?.map((job, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 400}
                className="sm:cursor-pointer relative group w-full flex items-center
                  gap-5 p-5 max-w-sm rounded-md border-2 border-gray"
              >
                <div>
                  <img
                    src={job.logo}
                    alt={job.empresa || "Logo não disponível"}
                    className="w-10 group-hover:scale-125 duration-200"
                  />
                </div>
                <div>
                  <h6>{job.empresa || "Empresa não definida"}</h6>
                  <p className="italic">{job.cargo || "Cargo não definido"}</p>
                  <div
                    onClick={() => {
                      setSelectJob(job); // Selecionar job
                      openModal(); // Abrir modal
                    }}
                    className="text-xl absolute top-3 right-3"
                  >
                    {createElement(
                      skills?.icon || "span",
                      {},
                      "Icone não definido"
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
