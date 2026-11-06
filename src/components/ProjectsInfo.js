const projects = [
  {
    name: "Letty's Cakes",
    kind: "Web app",
    year: "2021",
    summary:
      "A website for a Venezuelan baking business, where the owner manages desserts and customers place orders.",
    description:
      "Website created for Letty's Cakes, a Venezuelan baking business. Built with React, Node.js, Express, and MongoDB. The admin can create, display, edit, and delete desserts, and everyone else can place orders for the admin to view and clear.",
    imageSrc: "/lettyscakes.png",
    imageAlt: "Letty's Cakes homepage, with a pastry case and a browse desserts button",
    url: "https://lettyscakes.netlify.app/",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    fit: "cover",
    imagePosition: "center",
  },
  {
    name: "Cat-astrophe",
    kind: "Game",
    year: "2021",
    summary:
      "A short canvas game about a cat left home alone, racing to break everything before the owner returns.",
    description:
      "Cat-astrophe is a short game where you play as Catrina, a destructive cat left alone while her owner goes to the store. The objective is to break every object you can before the human gets back. Not every object can be destroyed. Built with JavaScript Canvas.",
    imageSrc: "/catastrophe.png",
    imageAlt: "Cat-astrophe game screen showing a cutaway of a house and an items destroyed counter",
    url: "https://andriwt.github.io/cat-astrophe/",
    stack: ["JavaScript", "Canvas"],
    fit: "contain",
    imagePosition: "center",
  },
  {
    name: "W/O Contaxt",
    kind: "Web app",
    year: "2021",
    summary:
      "A realtime messaging app with accounts, live chat, and a history saved for every conversation.",
    description:
      "W/O Contaxt lets you sign up, create a profile, and chat in real time with other people on the platform. Socket.io delivers messages as they are sent. React, Node.js, Express, and MongoDB store users and each conversation, so you can leave and come back to the full thread. Signup and login are authenticated.",
    imageSrc: "/wocontaxt.png",
    imageAlt: "W/O Contaxt chat room directory with profile cards and message buttons",
    url: "https://withoutcontaxt.netlify.app/",
    stack: ["React", "Socket.io", "Node.js", "MongoDB"],
    fit: "cover",
    imagePosition: "center top",
  },
  {
    name: "Treesitos",
    kind: "Collaboration",
    year: "2021",
    summary:
      "A Shellhacks 2021 project for planting flora nearby and pinning each planting on a shared map.",
    description:
      "Treesitos invites you to plant flora around your area and add it to a shared map — a small push toward a greener neighborhood, and a mark you can leave behind. Built with a team for Shellhacks 2021. My part was the backend structure, a share of the front end, and the CSS and design. The stack is React, Node.js, Express, MongoDB, and the Google Maps API.",
    imageSrc: "/treesitos.png",
    imageAlt: "Treesitos landing page with a green tree mark and a short description of the planting map",
    url: "https://rocky-shore-48903.herokuapp.com/home",
    stack: ["React", "Node.js", "MongoDB", "Google Maps"],
    fit: "cover",
    imagePosition: "center",
  },
  {
    name: "AT-Pokedex",
    kind: "Web app",
    year: "2021",
    summary:
      "An old-school encyclopedia for 898 Pokémon, with evolutions, stats, and descriptions from PokéAPI.",
    description:
      "AT-Pokedex is an encyclopedia inspired by the original anime device. Type a name or a number for any of the 898 Pokémon and the page returns evolutions, triggers, stats, descriptions, and more, using the public PokéAPI. It was practice in fetching data with Axios, and in HTML and CSS.",
    imageSrc: "/at-pokedex.png",
    imageAlt: "AT-Pokedex showing Pikachu, its stats, and its evolution line on a pink device",
    url: "https://at-pokedex.netlify.app/",
    stack: ["JavaScript", "Axios", "PokéAPI"],
    fit: "contain",
    imagePosition: "center",
  },
];

export default projects;
