import Rick1 from "./assets/rick1.webp";
import Rick2 from "./assets/rick2.webp";
import Quotes1 from "./assets/quotes1.webp";
import Quotes2 from "./assets/quotes2.webp";
import Gitlab from "./assets/gitlab2.webp";
import Gitlab2 from "./assets/gitlab3.webp";
import Gdrive1 from "./assets/gdrive1.webp";
import Gdrive2 from "./assets/gdrive2.webp";
import Coffee1 from "./assets/coffee1.webp";
import UltimoBote1 from "./assets/ultimo-bote.webp";
import UltimoBote2 from "./assets/ultimo-bote2.webp";
import UltimoBote3 from "./assets/ultimo-bote3.webp";

const projects = [
    {
        title: "Gitlab Manager",
        description:
            "App built with Angular and Laravel that uses the Gitlab API to display the projects inside a group that a user owns in Gitlab, and to remove members from them and from the group.",
        url: {
            backend: "https://github.com/ejanerop/gitlab-back",
            frontend: "https://github.com/ejanerop/gitlab-front",
        },
        images: [Gitlab, Gitlab2],
        startDate: "2021",
        technologies: [
            {
                class: "fab fa-angular",
                name: "Angular",
            },
            {
                class: "fab fa-laravel",
                name: "Laravel",
            },
        ],
    },
    {
        title: "Coffee Machine",
        description:
            "Console application built with PHP that from a few input parameters (drink type, amount of money, number of sugars, extra hot check) is capable to order a drink and show a cool message of the desired drink.",
        url: {
            github: "https://github.com/ejanerop/CoffeeMaker",
        },
        images: [Coffee1],
        startDate: "2021",
        technologies: [
            {
                class: "fab fa-php",
                name: "PHP",
            },
        ],
    },
    {
        title: "GDrive Manager",
        description:
            "App built with Angular and Laravel that uses the Google Drive API to bulk remove the files/folders permissions of a user in a drive.",
        url: {
            backend: "https://github.com/ejanerop/gdrive-backend",
            frontend: "https://github.com/ejanerop/gdrive-frontend",
        },
        images: [Gdrive1, Gdrive2],
        startDate: "2021",
        technologies: [
            {
                class: "fab fa-angular",
                name: "Angular",
            },
            {
                class: "fab fa-laravel",
                name: "Laravel",
            },
        ],
    },
    {
        title: "RickAndMortyPedia",
        description:
            "App built in Angular that uses the Rick and Morty API to display the characters, episodes and locations from the show.",
        url: {
            preview: "https://rick-and-morty-pedia.netlify.app/",
            github: "https://github.com/ejanerop/rick-and-morty-app",
        },
        images: [Rick1, Rick2],
        startDate: "2022",
        technologies: [
            {
                class: "fab fa-angular",
                name: "Angular",
            },
            {
                class: "fab fa-bootstrap",
                name: "Bootstrap",
            },
            {
                class: "fab fa-sass",
                name: "Sass",
            },
        ],
    },
    {
        title: "Random Quote Machine",
        description:
            "Simple app built in React that shows a random quote from Friends TV Show, as a part of the Front End Development Libraries Certification in freeCodeCamp.",
        url: {
            preview: "https://random-friends-quote-machine.netlify.app/",
            github: "https://github.com/ejanerop/random-quote-machine",
        },
        images: [Quotes1, Quotes2],
        startDate: "2022",
        technologies: [
            {
                class: "fab fa-react",
                name: "React",
            },
        ],
    },
    {
        title: "ÚltimoBote",
        description:
            "App built with Angular and Firebase that uses the Firestore Database to store soccer player and their stats, and the matchdays. It also keep records of the goals scored on each matchday.",
        url: {
            preview: "https://ultimo-bote-app.web.app/",
            github: "https://github.com/ejanerop/ultimo-bote",
        },
        images: [UltimoBote1, UltimoBote2, UltimoBote3],
        startDate: "2022",
        technologies: [
            {
                class: "fab fa-angular",
                name: "Angular",
            },
        ],
    },
];

export default projects;
