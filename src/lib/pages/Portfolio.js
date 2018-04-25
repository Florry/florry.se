import React from "react";

export default class Portfolio extends React.Component {

    render() {
        return (
            <span>
                <div className="showcase">
                    {
                        this.props.projects.map((project, index) => (
                            <span key={index}
                                className={`image-box ${project.classes ? project.classes.join(" ") : ""}`}
                                title={project.name}>
                                <a href={project.link || `/project/${project.id}`} target={project.link ? "_blank" : ""}>
                                    <span className="project--name">
                                        {project.name}
                                        <br />
                                        <span className="highlight">[{project.from} {project.to ? " - " + project.to : ""}]</span>
                                    </span>
                                    {this.getCoverMedia(project.coverMedia)}
                                </a>
                            </span>
                        ))
                    }

                </div>
            </span>
        );
    }

    getCoverMedia(cover) {
        switch (cover.type) {
            default:
            case "IMAGE":
                // @ts-ignore
                return <img alt="" src={require(`../../static/${cover.filename}`)} />;
        }
    }

}