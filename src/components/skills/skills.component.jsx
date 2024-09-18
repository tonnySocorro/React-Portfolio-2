import "./skills.component.scss";

export default function Skills() {
    let skills = [
        {
            name: "Java",
            icon: "fab fa-java",
        },
        {
            name: "Git",
            icon: "fab fa-git-alt",
        },
        {
            name: "python",
            icon:  "fab fa-python",
        },
       
        {
            name: "Web Services",
            icon: "fas fa-cogs",  // Icono para Web Services
        },
       
        {
            name: "Apache NiFi",
            icon: "fas fa-project-diagram",  // Icono para Apache NiFi
        },
        {
            name: "Amazon Web Services",
            icon: "fab fa-aws",  // Icono para AWS
        },
        {
            name: "HTML",
            icon: "fab fa-html5",
        },
        {
            name: "CSS",
            icon: "fab fa-css3-alt",
        },
        {
            name: "Javascript",
            icon: "fab fa-js",
        },
        {
            name: "MongoDB",
            icon: "fas fa-leaf",  // Icono que simula el logo de MongoDB
        },
        {
            name: "PostgreSQL",
            icon: "fas fa-database",  // Icono para bases de datos en general
        }
       
       
    ];
    return (
        <section id="skills-section">
            <h2 className="display-5 lh-1 mb-3">My top skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="col-12 col-md-3 skill">
                        <i className={skill.icon}></i>
                        <h3 className="skill-name">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
