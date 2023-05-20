import { HomePageProps } from "@/pages";

export const homePageMock: HomePageProps = {
  profile: {
    id: "64444315f4b5e101b58f56e3",
    createdAt: new Date("2023-04-22T20:27:00.485Z"),
    updatedAt: new Date("2023-05-09T01:32:24.236Z"),
    name: "Teilor Souza Barcelos",
    imageUrl: "https://github.com/teilorbarcelos.png",
    job: {
      PT_BR: "Desenvolvedor Web Full-Stack.",
      EN: "Full-Stack Web Developer.",
    },
    phone_number: "+55 (48) 99863-4063",
    github_url: "https://github.com/teilorbarcelos",
    linkedin_url: "https://www.linkedin.com/in/teilorsb/",
    twitter_url: "",
    medium_url: "",
    stack_overflow_url: "",
    email: "tsb.developer87@gmail.com",
    website: "",
    hello_message: {
      PT_BR:
        '<p>Olá, eu sou um <b>Desenvolvedor Web Full-Stack</b> com mais de 3 anos de experiência trabalhando com Reactjs, NextJs e NodeJs em aplicações web e mobile. Fique a vontade para conhecer alguns dos meus <a href="/projects">trabalhos</a>.</p>',
      EN: '<p>Hello, I am a <b>Full-Stack Web Developer</b> with over 3 years of experience working with Reactjs, NextJs and NodeJs on web and mobile applications. Feel free to check out some of my <a href="/projects">works</a>.</p>',
    },
    about_me: {
      PT_BR:
        "<p>Desenvolver aplicações com código limpo e alta legibilidade, com enfase na qualidade, desempenho e escalabilidade, incluindo testes automatizados. Sou um entusiasta de TI apaixonado por desenvolvimento de software, atualmente estou cursando Análise e Desenvolvimento de Sistemas. Minha especialidade é o ReactJS e seu ecossistema, com vários projetos de estudo e experiência em projetos reais usando ReactJs, NextJS e GatsbyJS para frontend e NodeJS para back-end, com Typescript. Além disso, tenho experiência em bancos de dados como MongoDB, Firebase, MySQL e PostgreSQL, versionamento Git/Git Flow e Github/Gitlab/Bitbucket, e deploy em nuvem usando Vercel, Heroku e AWS.</ br></ br>Tenho conhecimentos em outras stacks como PHP e Laravel, bem como em redes de internet, servidores Linux e programação de aplicativos para otimização de processos em setores onde trabalhei, desenvolvendo aplicações desktop em C#, Java e Python</p>",
      EN: "<p>Develop applications with clean code and high readability, emphasizing quality, performance, and scalability, including automated tests. I am a passionate IT enthusiast for software development, currently pursuing a degree in Systems Analysis and Development. My specialty is ReactJS and its ecosystem, with several study projects and experience in real projects using ReactJS, NextJS, and GatsbyJS for frontend and NodeJS for backend, with Typescript. Additionally, I have experience with databases such as MongoDB, Firebase, MySQL, and PostgreSQL, Git/Git Flow versioning and Github/Gitlab/Bitbucket, and cloud deployment using Vercel, Heroku, and AWS.</p><br/><br/>I also have knowledge in other stacks such as PHP and Laravel, as well as internet networks, Linux servers, and application programming for process optimization in sectors where I worked, developing desktop applications in C#, Java, and Python.</p>",
    },
  },
  projects: [
    {
      id: "646113013c2a4b9755dd954c",
      createdAt: "2023-05-14T16:51:51.820Z",
      updatedAt: "2023-05-14T16:51:51.820Z",
      title: {
        EN: "Let me Ask",
        PT_BR: "Let me Ask",
      },
      slug: "let-me-ask",
      imageUrl:
        "https://camo.githubusercontent.com/ab54ae906e9820d4b142ab9518a9ce743aa61711b20c5fb7203ea94ddc50ed9e/68747470733a2f2f7465696c6f727765626465762e76657263656c2e6170702f5f6e6578742f696d6167653f75726c3d2532465f6e657874253246737461746963253246696d6167652532467075626c69632532466c65746d6561736b2e39353239616264633839333231623632303039353734633133333462396663352e706e6726773d3139323026713d3735",
      leadingText: {
        EN: "Let me Ask",
        PT_BR: "Let me Ask",
      },
      contentText: {
        EN: "Let me Ask",
        PT_BR: "Let me Ask",
      },
      stacks: [
        {
          id: "646111a73c2a4b9755dd954b",
          createdAt: "2023-05-14T16:51:51.820Z",
          updatedAt: "2023-05-14T16:51:51.820Z",
          name: "Typescript",
          image:
            "<svg width='56' height='57' viewBox='0 0 56 57' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(#clip0_205_586)'><path d='M0 28.8281V0.828125H56V56.8281H0' fill='#007ACC'/><path d='M12.278 28.9261V31.2081H19.558V51.9281H24.724V31.2081H32.004V28.9681C32.004 27.7081 32.004 26.6861 31.948 26.6581C31.948 26.6161 27.51 26.6021 22.12 26.6021L12.32 26.6441V28.9401L12.278 28.9261ZM44.996 26.5881C46.424 26.9241 47.516 27.5681 48.496 28.5901C49.014 29.1501 49.784 30.1301 49.84 30.3821C49.84 30.4661 47.418 32.1041 45.948 33.0141C45.892 33.0561 45.668 32.8181 45.444 32.4541C44.716 31.4181 43.974 30.9701 42.812 30.8861C41.132 30.7741 40.012 31.6561 40.012 33.1261C40.012 33.5741 40.096 33.8261 40.264 34.1901C40.642 34.9601 41.342 35.4221 43.512 36.3741C47.516 38.0961 49.252 39.2301 50.302 40.8541C51.492 42.6741 51.758 45.5301 50.96 47.6721C50.064 50.0101 47.88 51.5921 44.758 52.1101C43.778 52.2781 41.538 52.2501 40.488 52.0681C38.248 51.6481 36.106 50.5281 34.79 49.0861C34.272 48.5261 33.278 47.0281 33.334 46.9301L33.866 46.5941L35.966 45.3761L37.548 44.4521L37.912 44.9421C38.374 45.6701 39.41 46.6501 40.012 46.9861C41.832 47.9241 44.268 47.7981 45.472 46.7061C45.99 46.2301 46.214 45.7261 46.214 45.0261C46.214 44.3821 46.116 44.0881 45.794 43.5981C45.346 42.9821 44.45 42.4781 41.93 41.3581C39.032 40.1261 37.8 39.3421 36.652 38.1381C35.994 37.4101 35.392 36.2761 35.112 35.3381C34.902 34.5261 34.832 32.5381 35.028 31.7401C35.63 28.9401 37.744 26.9801 40.768 26.4201C41.748 26.2241 44.058 26.3081 45.024 26.5601L44.996 26.5881Z' fill='white'/></g><defs><clipPath id='clip0_205_586'><rect width='56' height='56' fill='white' transform='translate(0 0.828125)'/></clipPath></defs></svg>",
        },
      ],
    },
  ],
};
