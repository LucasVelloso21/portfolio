// Traduções do site. O inglês (padrão) fica no próprio index.html;
// aqui ficam o português e o espanhol, com as mesmas chaves dos atributos data-i18n.
// Chave que faltar cai no texto em inglês.
const TRADUCOES = {
  pt: {
    "meta.title": "Lucas Vinicios Araujo Velloso | Desenvolvedor",
    "meta.description": "Currículo online de Lucas Velloso — desenvolvedor Full Stack Júnior em Campinas-SP (React, Next.js, TypeScript e Supabase).",

    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.skills": "Skills",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "nav.menu": "Abrir menu",

    "hero.role": "Desenvolvedor Full Stack Júnior",
    "hero.desc": "Estudante de Engenharia de Software com foco em desenvolvimento web full stack usando React, Next.js, TypeScript e Supabase. Campinas-SP.",
    "hero.cv": "Baixar currículo",
    "hero.cvFile": "curriculo-pt.pdf",
    "hero.cvName": "Curriculo-Lucas-Velloso.pdf",

    "about.photo": "Foto de Lucas Velloso",
    "about.title": "Sobre",
    "about.subtitle": "Conheça um pouco sobre mim",
    "about.p1": "Sou estudante de <strong>Engenharia de Software</strong> no 7º semestre (conclusão prevista para dezembro de 2026), com foco em desenvolvimento web full stack usando <strong>React, Next.js, TypeScript e Supabase</strong>.",
    "about.p2": "Nos últimos três anos atuo na área administrativa de uma empresa de transporte eventual e corporativo, onde assumi as demandas de tecnologia e desenvolvi um <strong>sistema web interno</strong> que hoje é usado no dia a dia pelos setores financeiro, RH e comercial.",
    "about.p3": "Busco uma posição de <strong>desenvolvedor júnior</strong> para seguir evoluindo tecnicamente em um time de TI.",
    "about.languages": "Idiomas",
    "about.languagesList": `
      <li><strong>Português</strong> Nativo</li>
      <li><strong>Inglês</strong> Intermediário (B2)</li>
      <li><strong>Espanhol</strong> Básico</li>`,

    "exp.title": "Experiência &amp; Formação",
    "exp.heading": "Experiência",
    "exp.date": "Mai/2023 — Atual",
    "exp.job": "Auxiliar Administrativo",
    "exp.list": `
      <li>Desenvolvimento e manutenção do sistema web interno, com 18 módulos usados pelos setores financeiro, RH e comercial — <a href="#projetos">ver projeto</a>.</li>
      <li>Atendimento a clientes e fornecedores.</li>
      <li>Elaboração e acompanhamento de orçamentos.</li>
      <li>Organização de documentos e processos administrativos.</li>
      <li>Suporte operacional e financeiro e controle de multas.</li>
      <li>Controle de informações com o Pacote Office.</li>`,
    "edu.heading": "Formação",
    "edu.date": "Fev/2023 — Dez/2026 (previsão)",
    "edu.degree": "Engenharia de Software",
    "edu.semester": "Cursando o 7º semestre.",

    "skills.title": "Skills",
    "skills.other": "Outras competências",
    "skills.otherList": `
      <li>Suporte de TI e atendimento ao usuário</li>
      <li>Windows</li>
      <li>Linux</li>
      <li>Google Workspace</li>
      <li>Microsoft Office (Excel, Word, Outlook, PowerPoint)</li>
      <li>Hardware e troubleshooting</li>
      <li>Redes (TCP/IP, DNS, compartilhamento de recursos)</li>
      <li>Active Directory (básico)</li>
      <li>GitHub Actions (CI e automações)</li>
      <li>Vercel</li>
      <li>Material-UI</li>
      <li>Scrum</li>
      <li>Kanban</li>`,

    "projects.title": "Projetos",
    "project.private": "&#128274; Sistema interno · posso apresentar em entrevista",
    "project.privateCode": "&#128274; Código privado · posso apresentar em entrevista",

    "sys.alt": "Ilustração do painel do sistema de gestão",
    "sys.kind": "Em produção · Empresa onde trabalho",
    "sys.title": "Sistema de gestão para empresa de fretamento",
    "sys.desc": "Sistema web que desenvolvi e mantenho sozinho. Substituiu planilhas e processos manuais e hoje é usado todos os dias pelos setores financeiro, RH e comercial — do orçamento da viagem ao fechamento do mês.",
    "sys.stats": `
      <li><strong>18</strong> módulos</li>
      <li><strong>+29 mil</strong> linhas de código</li>
      <li><strong>335</strong> commits</li>
      <li><strong>3</strong> setores usando todo dia</li>`,
    "sys.highlights": "Destaques técnicos",
    "sys.highlightsList": `
      <li>Atualização em tempo real entre usuários</li>
      <li>Modo offline com sincronização automática</li>
      <li>Login individual e permissões por usuário</li>
      <li>PWA com notificações push no celular</li>
      <li>Backup diário e testes automatizados (GitHub Actions)</li>
      <li>Integração com APIs de mapas, rotas, CEP e CNPJ</li>`,
    "sys.more": "Ver todos os módulos",
    "sys.modules": `
      <div>
        <h5>Comercial e viagens</h5>
        <ul class="project__list">
          <li>Orçamento com rota e km calculados pelo mapa e tabela de preços por faixa de distância</li>
          <li>Aviso de viagem e recibo do motorista, com envio pelo WhatsApp</li>
          <li>Checklist de cada viagem (motorista, cliente, escritório, impresso)</li>
          <li>Lista de passageiros: lê Word e Excel e gera o modelo da ARTESP</li>
          <li>Cadastro de clientes preenchido pelo CNPJ e pelo CEP</li>
        </ul>
      </div>
      <div>
        <h5>Operação</h5>
        <ul class="project__list">
          <li>Escala de fim de semana e de dias úteis, com pagamento por linha</li>
          <li>Linhas: paradas, melhor ordem, km, diesel e link de rota para o motorista</li>
          <li>Cadastro de motoristas e frota</li>
          <li>Controle de diesel e de uniformes</li>
        </ul>
      </div>
      <div>
        <h5>Financeiro</h5>
        <ul class="project__list">
          <li>Recebimentos, agenda de baixas e créditos de clientes</li>
          <li>Comissões e pagamentos</li>
          <li>Fechamento mensal por veículo, com gráfico e comparativo anual</li>
          <li>Checklist de notas fiscais e cadastro de fornecedores</li>
        </ul>
      </div>
      <div>
        <h5>RH e documentação</h5>
        <ul class="project__list">
          <li>Vencimentos de documentos (CNH, ARTESP, EMTU, extintor…) com alerta por situação</li>
          <li>Ficha de funcionários e controle de férias</li>
          <li>Aviso de vencimentos por e-mail e notificação no celular</li>
        </ul>
      </div>`,

    "fin.alt": "Ilustração do painel do Velloso Finance",
    "fin.kind": "Projeto pessoal · Em desenvolvimento",
    "fin.list": `
      <li>Gestão financeira pessoal com login via Google OAuth e e-mail/senha.</li>
      <li>Modelagem em PostgreSQL com campos JSONB e Row Level Security por usuário.</li>
      <li>Integração com Open Finance (API Pluggy) para importar transações automaticamente.</li>
      <li>Interface responsiva com tema claro/escuro.</li>`,

    "exam.alt": "Ilustração da tela de orçamento de exames",
    "exam.kind": "Projeto acadêmico",
    "exam.title": "Sistema de Orçamento de Exames Hospitalares",
    "exam.desc": "Aplicação web com banco de dados relacional para cadastro de procedimentos e emissão de orçamentos de exames.",

    "soon.thumb": "&lt;Em breve /&gt;",
    "soon.kind": "Em construção",
    "soon.title": "Próximo projeto",
    "soon.desc": "Um novo projeto está sendo desenvolvido e logo estará disponível aqui.",

    "contact.title": "Contato",
    "contact.intro": "Estou em Campinas-SP e aberto a oportunidades como desenvolvedor júnior. Fique à vontade para entrar em contato comigo!",
  },

  es: {
    "meta.title": "Lucas Vinicios Araujo Velloso | Desarrollador",
    "meta.description": "Currículum en línea de Lucas Velloso — desarrollador Full Stack Junior en Campinas, Brasil (React, Next.js, TypeScript y Supabase).",

    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.menu": "Abrir menú",

    "hero.role": "Desarrollador Full Stack Junior",
    "hero.desc": "Estudiante de Ingeniería de Software enfocado en desarrollo web full stack con React, Next.js, TypeScript y Supabase. Campinas, Brasil.",
    "hero.cv": "Descargar currículum",
    "hero.cvFile": "curriculo-es.pdf",
    "hero.cvName": "Curriculum-Lucas-Velloso.pdf",

    "about.photo": "Foto de Lucas Velloso",
    "about.title": "Sobre mí",
    "about.subtitle": "Conóceme un poco",
    "about.p1": "Soy estudiante de <strong>Ingeniería de Software</strong> en el 7.º semestre (graduación prevista para diciembre de 2026), enfocado en desarrollo web full stack con <strong>React, Next.js, TypeScript y Supabase</strong>.",
    "about.p2": "En los últimos tres años he trabajado en el área administrativa de una empresa de transporte chárter y corporativo, donde asumí las necesidades de tecnología y desarrollé un <strong>sistema web interno</strong> que hoy se usa a diario en las áreas de finanzas, RR. HH. y comercial.",
    "about.p3": "Busco una posición de <strong>desarrollador junior</strong> para seguir creciendo técnicamente en un equipo de TI.",
    "about.languages": "Idiomas",
    "about.languagesList": `
      <li><strong>Portugués</strong> Nativo</li>
      <li><strong>Inglés</strong> Intermedio (B2)</li>
      <li><strong>Español</strong> Básico</li>`,

    "exp.title": "Experiencia &amp; Formación",
    "exp.heading": "Experiencia",
    "exp.date": "May. 2023 — Actualidad",
    "exp.job": "Asistente Administrativo",
    "exp.list": `
      <li>Desarrollo y mantenimiento del sistema web interno, con 18 módulos usados por las áreas de finanzas, RR. HH. y comercial — <a href="#projetos">ver proyecto</a>.</li>
      <li>Atención a clientes y proveedores.</li>
      <li>Elaboración y seguimiento de presupuestos.</li>
      <li>Organización de documentos y procesos administrativos.</li>
      <li>Soporte operativo y financiero; control de multas de tránsito.</li>
      <li>Control de información con Microsoft Office.</li>`,
    "edu.heading": "Formación",
    "edu.date": "Feb. 2023 — Dic. 2026 (previsto)",
    "edu.degree": "Ingeniería de Software",
    "edu.semester": "Cursando el 7.º semestre.",

    "skills.title": "Habilidades",
    "skills.other": "Otras competencias",
    "skills.otherList": `
      <li>Soporte de TI y atención al usuario</li>
      <li>Windows</li>
      <li>Linux</li>
      <li>Google Workspace</li>
      <li>Microsoft Office (Excel, Word, Outlook, PowerPoint)</li>
      <li>Hardware y troubleshooting</li>
      <li>Redes (TCP/IP, DNS, recursos compartidos)</li>
      <li>Active Directory (básico)</li>
      <li>GitHub Actions (CI y automatizaciones)</li>
      <li>Vercel</li>
      <li>Material-UI</li>
      <li>Scrum</li>
      <li>Kanban</li>`,

    "projects.title": "Proyectos",
    "project.private": "&#128274; Sistema interno · puedo presentarlo en una entrevista",
    "project.privateCode": "&#128274; Código privado · puedo presentarlo en una entrevista",

    "sys.alt": "Ilustración del panel del sistema de gestión",
    "sys.kind": "En producción · Empresa donde trabajo",
    "sys.title": "Sistema de gestión para empresa de transporte chárter",
    "sys.desc": "Sistema web que desarrollé y mantengo por mi cuenta. Reemplazó hojas de cálculo y procesos manuales y hoy se usa todos los días en las áreas de finanzas, RR. HH. y comercial — del presupuesto del viaje al cierre del mes.",
    "sys.stats": `
      <li><strong>18</strong> módulos</li>
      <li><strong>+29 mil</strong> líneas de código</li>
      <li><strong>335</strong> commits</li>
      <li><strong>3</strong> áreas lo usan a diario</li>`,
    "sys.highlights": "Aspectos técnicos destacados",
    "sys.highlightsList": `
      <li>Actualización en tiempo real entre usuarios</li>
      <li>Modo offline con sincronización automática</li>
      <li>Inicio de sesión individual y permisos por usuario</li>
      <li>PWA con notificaciones push en el celular</li>
      <li>Copia de seguridad diaria y pruebas automatizadas (GitHub Actions)</li>
      <li>Integración con APIs de mapas, rutas, código postal (CEP) y registro de empresas (CNPJ)</li>`,
    "sys.more": "Ver todos los módulos",
    "sys.modules": `
      <div>
        <h5>Comercial y viajes</h5>
        <ul class="project__list">
          <li>Presupuesto con ruta y km calculados en el mapa y tabla de precios por rango de distancia</li>
          <li>Aviso de viaje y recibo del conductor, con envío por WhatsApp</li>
          <li>Checklist de cada viaje (conductor, cliente, oficina, impreso)</li>
          <li>Lista de pasajeros: lee Word y Excel y genera el modelo de la ARTESP</li>
          <li>Registro de clientes completado a partir del CNPJ y del código postal</li>
        </ul>
      </div>
      <div>
        <h5>Operación</h5>
        <ul class="project__list">
          <li>Turnos de fin de semana y de días hábiles, con pago por línea</li>
          <li>Líneas: paradas, mejor orden, km, diésel y enlace de ruta para el conductor</li>
          <li>Registro de conductores y flota</li>
          <li>Control de diésel y de uniformes</li>
        </ul>
      </div>
      <div>
        <h5>Finanzas</h5>
        <ul class="project__list">
          <li>Cobros, agenda de pagos y créditos de clientes</li>
          <li>Comisiones y pagos</li>
          <li>Cierre mensual por vehículo, con gráfico y comparativo anual</li>
          <li>Checklist de facturas y registro de proveedores</li>
        </ul>
      </div>
      <div>
        <h5>RR. HH. y documentación</h5>
        <ul class="project__list">
          <li>Vencimientos de documentos (licencia de conducir, ARTESP, EMTU, extintor…) con alerta por estado</li>
          <li>Ficha de empleados y control de vacaciones</li>
          <li>Aviso de vencimientos por correo y notificación en el celular</li>
        </ul>
      </div>`,

    "fin.alt": "Ilustración del panel de Velloso Finance",
    "fin.kind": "Proyecto personal · En desarrollo",
    "fin.list": `
      <li>Gestión de finanzas personales con inicio de sesión por Google OAuth y correo/contraseña.</li>
      <li>Modelado en PostgreSQL con campos JSONB y Row Level Security por usuario.</li>
      <li>Integración con Open Finance (API Pluggy) para importar transacciones automáticamente.</li>
      <li>Interfaz responsiva con tema claro/oscuro.</li>`,

    "exam.alt": "Ilustración de la pantalla de presupuesto de exámenes",
    "exam.kind": "Proyecto académico",
    "exam.title": "Sistema de Presupuestos de Exámenes Hospitalarios",
    "exam.desc": "Aplicación web con base de datos relacional para registrar procedimientos y emitir presupuestos de exámenes.",

    "soon.thumb": "&lt;Próximamente /&gt;",
    "soon.kind": "En construcción",
    "soon.title": "Próximo proyecto",
    "soon.desc": "Se está desarrollando un nuevo proyecto que pronto estará disponible aquí.",

    "contact.title": "Contacto",
    "contact.intro": "Estoy en Campinas, Brasil, y abierto a oportunidades como desarrollador junior. ¡No dudes en contactarme!",
  },
};
