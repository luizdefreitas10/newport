export const projectsMock = [
  {
    id: 1,
    name: 'NinthGame',
    src: '/ninthgame.png',
    resume:
      'O NinthGame é um jogo de perguntas e respostas baseado no jogo Trivia, onde o usuário pode efetuar o login seguindo o padrão de validações, e em seguida será direcionado para a página do jogo. Nesta página, o jogador deve responder a opção correta em até 30 segundos. Serão feitas 5 perguntas, e durante o processo é possível visualizar a pontuação atual, quantas questões assertivas foram efetuadas, e o progresso do jogo em percentual. Ao final das perguntas é exibida uma tela com a pontuação conquistada pelo usuário, bem como a possibilidade de ir para uma tela de rankings, ou jogar novamente. Na tela inicial, é possível alterar o tema de dark mode para light mode, dando outro visual à aplicação. Também é possível acessar as configurações, escolher a quantidade de perguntas do jogo, a categoria, dificuldade  e o tipo de perguntas. Um jogo super divertido e desafiador para testar seus conhecimentos sobre diversos assuntos.',
    stacks: [
      'JavaScript',
      'Styled-Components',
      'React',
      'Redux',
      'RTL (react testing library)',
    ],
    vercel: 'https://react-trivia-eta.vercel.app/',
  },
  {
    id: 2,
    name: 'TechSales E-commerce',
    src: '/techsales.png',
    resume:
      'Um moderno e-commerce desenvolvido para venda de serviços de tecnologia. Utilizando as mais recentes tecnologias web, esta plataforma permite que usuários adquiram soluções como SaaS, gestão empresarial, integrações de API e muito mais!',
    stacks: [
      'HTML',
      'CSS',
      'React',
      'Styled-components',
      'React-Router-Dom',
      'Toastify',
    ],
    vercel: 'https://valcann-techsales.vercel.app/',
  },
  {
    id: 4,
    name: 'Blogs API',
    src: '/blogsapi.webp',
    resume:
      'Esta é uma API e um banco de dados de gerenciamento de um blog, onde é possível buscar, criar, editar e deletar postagens. Seguindo a arquitetura MSC (model, service, controller) e os princípios REST, aplicação foi desenvolvida utilizando NodeJs e o pacote Sequelize para fazer um CRUD de posts.',
    stacks: ['NodeJs', 'JavaScript', 'Express', 'Sequelize', 'Joi', 'MySQL'],
    vercel: 'https://github.com/luizdefreitas10/blogs-api',
  },
  {
    id: 5,
    name: 'API Store Manager',
    src: '/apistoremanager.png',
    resume:
      'Esta é uma API RESTFULL desenvolvida através da arquitetura MSC (model, service, controller), e funciona como sistema de gerenciamento de vendas no formato dropshipping em que será possível criar, visualizar, deletar e atualizar produtos e vendas.',
    stacks: [
      'NodeJs',
      'JavaScript',
      'Express',
      'Mocha',
      'Chai',
      'Sinon',
      'Joi',
    ],
    vercel: 'https://github.com/luizdefreitas10/store-manager-api',
  },
]
