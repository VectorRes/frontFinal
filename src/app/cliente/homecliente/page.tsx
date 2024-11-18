export const page = () =>{
    return(
        <div className="flex flex-col min-h-screen">
      {/* Header with image */}
      <header className="relative w-full h-96 pt-8">
        <img
          src="/esperanzaParaTodos.png" // Sustituye con la URL de tu imagen
          alt="Header Image"
          className="w-full h-full object-cover"
        />
      </header>

      {/* Content section with three columns */}
      <section className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 px-6 py-12 bg-gray-100">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">Mision</h2>
          <p className="mt-4 text-gray-700">
          En Esperanza Para Todos, trabajamos incansablemente para proporcionar ayuda humanitaria y mejorar las condiciones de vida de las comunidades más vulnerables. Nuestra misión es transformar realidades, promoviendo el acceso a recursos básicos, la educación, la salud y el desarrollo sostenible, con un enfoque en la dignidad humana y la equidad.
          </p>
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">Vision</h2>
          <p className="mt-4 text-gray-700">
          Ser reconocidos como un referente de solidaridad y transformación social, generando un impacto sostenible en las comunidades vulnerables a nivel local, nacional e internacional. Aspiramos a construir un mundo más justo, donde todas las personas tengan las oportunidades necesarias para una vida plena y digna.
          </p>
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">Politica de Calidad</h2>
          <p className="mt-4 text-gray-700">
          En Esperanza Para Todos, nos comprometemos a ofrecer servicios humanitarios de alta calidad que respondan eficazmente a las necesidades de las comunidades vulnerables. Promovemos la transparencia, la eficiencia y la mejora continua en nuestras acciones, garantizando el uso ético y responsable de los recursos. Fomentamos alianzas estratégicas y la participación activa de voluntarios, colaboradores y beneficiarios, asegurando un impacto positivo y duradero.
          </p>
        </div>
      </section>
    </div>
    )
} 

export default page;