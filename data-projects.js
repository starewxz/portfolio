const dataProjects = [
    {
        id: "fluffy-steps",
        name: "🐾 Fluffy steps",
        img: [
            `${import.meta.env.BASE_URL}projects/fluffy1.jpeg`,
            `${import.meta.env.BASE_URL}projects/fluffy2.jpeg`,
            `${import.meta.env.BASE_URL}projects/fluffy3.jpeg`,
            `${import.meta.env.BASE_URL}projects/fluffy4.png`,
            `${import.meta.env.BASE_URL}projects/fluffy5.png`,
            `${import.meta.env.BASE_URL}projects/fluffy6.png`,
            `${import.meta.env.BASE_URL}projects/fluffy7.png`,
        ],
        text: "This is my first big solo project — as I mentioned on the About Me page, it’s a landing page for an online slippers store, designed with a focus on comfort and user experience.\n" +
            "It was also my first time using React in a real-world project and connecting it to a live database. This project was a valuable learning experience and an exciting step forward in my development journey.",
        link: "https://starewxz.github.io/fluffy/",
        textAbout: "This project marked my first large-scale solo development effort — a landing page for an online slippers store, thoughtfully crafted with a clean, comfort-focused design aimed at delivering a smooth user experience.\n" +
            "It was also my first hands-on experience building a real-world application with React, integrating frontend animations using Framer Motion, and connecting to a cloud database (Firebase) to handle product data and customer orders.\n" +
            "Beyond just coding, I learned how to structure and manage a complete project — from setting up responsive layouts and reusable components to handling forms, validation, and real-time updates.\n" +
            "This project pushed me to apply everything I had learned and explore new tools and techniques. It was a meaningful step in my journey as a web developer — full of both challenges and breakthroughs.",
        tech: ["React", "HTML5", "CSS3", "JavaScript (ES6+)", "Firebase", "Font Awesome", "Bootstrap", "Ant Design", "ESLint", "Vercel", "GitHub Pages", "Git", "Framer Motion", "Vite", "React Router", "Axios"],
    },
    {
        id: "kuzco-crm",
        name: "💻 Kuzco CRM",
        img: [
            `${import.meta.env.BASE_URL}projects/kuzco1.jpeg`,
            `${import.meta.env.BASE_URL}projects/kuzco2.jpeg`,
            `${import.meta.env.BASE_URL}projects/kuzco3.jpeg`,
            `${import.meta.env.BASE_URL}projects/kuzco4.jpeg`,
            `${import.meta.env.BASE_URL}projects/kuzco5.jpeg`,
        ],
        text: "This is my first truly large-scale project — a CRM system for a laptop store, built together with an experienced developer friend. You can check out the business here: https://www.instagram.com/kuzco.shop/.\n" +
            "It was my first time working on a project with a fully developed backend and local server, which helped me grow a lot as a developer. I can’t share the project link because it runs locally and contains confidential data.",
        textAbout: "This project represents my first experience working on a fully developed, large-scale web application — a CRM system for a laptop store. You can check out the business on Instagram: @kuzco.shop .\n" +
            "It’s a collaborative project I’m building with a close friend who is a highly skilled and experienced developer. Working alongside him has been an amazing opportunity to learn industry-level practices, receive mentorship, and improve much faster through real-time feedback.\n" +
            "This is also my first time working with a well-structured backend architecture, including a developed server, advanced routing, and secure data handling. Although I can’t provide access to the project due to confidentiality, it played a key role in strengthening my backend development skills and enhancing my ability to collaborate on complex, team-based systems.",
        tech: ["React", "HTML5", "CSS3", "JavaScript (ES6+)", "Font Awesome", "Ant Design", "ESLint", "GitHub Pages", "Git", "Framer Motion", "Vite", "React Router", "Axios", "Autoprefixer", "PostCSS", "Nest", "TypeScript", "MongoDB", "Mongoose",
            "Axios", "ESLint",
]
    },
    {
        id: "timer",
        name: "⏱️Timer",
        img: [
            `${import.meta.env.BASE_URL}projects/timer1.jpeg`,
            `${import.meta.env.BASE_URL}projects/timer2.jpeg`,
            `${import.meta.env.BASE_URL}projects/timer3.jpeg`,
            `${import.meta.env.BASE_URL}projects/timer4.jpeg`,
            `${import.meta.env.BASE_URL}projects/timer5.jpeg`,
        ],
        text: "This was my very first pet project — as you may have seen on my About Me page. It was a great learning experience and turned out to be a small but very useful tool.\n" +
            "Built using plain JavaScript at the beginning of my programming journey, this project is designed for laptop users. It tracks and saves your Rubik's Cube solving times, generates scrambles using a dedicated library, and features a clean, easy-to-use interface. While it isn’t full responsive for mobile yet, it’s a solid and practical tool.",
        link: "https://starewxz.github.io/cube-timer-/timer.html",
        textAbout: "This was the first pet project I built at the very beginning of my development journey. It’s a simple yet practical Rubik's Cube timer and result tracker created entirely with vanilla JavaScript. At the time, I wanted to deepen my understanding of the core web technologies without relying on any frameworks — and this project became the perfect way to do that.\n" +
            "\n" +
            "While the application isn’t responsive for mobile devices, it’s fully optimized for laptops and offers a smooth and intuitive experience. It allows users to track their solving times, compare results, and view performance progress. One of the core features is its integration with a scramble generation library, which automatically provides new scrambles after each attempt — making it a handy tool for anyone practicing speedcubing.\n" +
            "\n" +
            "Even though it’s not a large project, it taught me the importance of clean UI, user-friendly design, and data handling in JavaScript. This was a great first step into real-world development and gave me the confidence to keep learning and building more advanced applications.",
        tech: ["HTML5", "CSS3", "JavaScript (ES6+)"],
    },
    {
        id: "note-keeper",
        name: "📝Luna (note keeper)",
        img: [
            `${import.meta.env.BASE_URL}projects/Luna1.png`,
            `${import.meta.env.BASE_URL}projects/Luna2.png`,
            `${import.meta.env.BASE_URL}projects/Luna3.png`,
            `${import.meta.env.BASE_URL}projects/Luna4.png`,
            `${import.meta.env.BASE_URL}projects/Luna5.png`,
        ],
        text: "This is a React-based note-taking app I built to practice state management, component design, and local storage persistence. It features inline editing with a clean UI, allowing users to create, edit, and delete notes seamlessly.",
        link: "https://keeper-delta-taupe.vercel.app",
        textAbout: "This project represents my hands-on journey into building a dynamic and interactive React application focused on user productivity. The app allows users to create notes with titles and content, edit them inline using intuitive icons, and delete them when no longer needed — all with smooth, state-driven UI updates.\n" +
            "\n" +
            "A key part of the challenge was implementing inline editing with controlled components and managing complex state updates, including persisting all notes in localStorage to maintain data between sessions. I also integrated FontAwesome icons to improve UX and added thoughtful UI feedback like toggling edit/save icons.\n" +
            "\n" +
            "This project deepened my understanding of React hooks (useState, useEffect), component composition, and event handling, while reinforcing best practices in managing immutable state updates and local storage synchronization. The resulting app combines functionality with a clean and simple design, providing a solid foundation for more advanced React projects.\n" +
            "\n" +
            "Building this note app was a meaningful step in my learning path — it taught me how to design and implement real-time editing workflows in React, how to create reusable components, and how to deliver a smooth, user-friendly experience. It’s a practical tool I can continue expanding and refining as I grow my React skills.",
        tech: ["HTML5","CSS3","React", "React Router", "Styled Components", "Font Awesome", "Ant Design", "Tailwind", "TypeScript", "ESLint", "Autoprefixer", "PostCSS", "Vite"]

    }
]

export default dataProjects