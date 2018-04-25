import React from "react";

const defaultValue = {
    name: 1337,
    from: 1991,
    to: "current",
    media: Array(3).fill({
        type: "IMAGE",
        filename: "img.jpg",
        caption: 1337
    }),
    content: ["This is a 404 page!"]
};

export default class Project extends React.Component {

    constructor(props) {
        super(props);

        this.currentProjectId = window.location.pathname.replace("/project/", "");
        this.currentProject = this.props.projects.find(p => p.id === this.currentProjectId) || defaultValue;

        if (!this.currentProject.content)
            this.currentProject = defaultValue;
    }

    render() {
        return (
            <div className="container">
                <div>
                    <div>
                        <div id="description-text">
                            {this.currentProject.name} <span className="highlight">[{this.currentProject.from} {this.currentProject.to ? " - " + this.currentProject.to : ""}]</span>
                        </div>
                    </div>
                </div>

                {
                    this.currentProject.content.map((content, index) => {
                        return (
                            <div key={index}>
                                {
                                    content
                                        ? <p className={`p--project ${this.isOdd(index) ? "" : "right"}`}>
                                            {
                                                content instanceof Array
                                                    ? content.map((c, index) => <span key={index} dangerouslySetInnerHTML={{ __html: c }} />)
                                                    : <span dangerouslySetInnerHTML={{ __html: content }} />
                                            }

                                            {
                                                index === 0 && this.currentProject.tags
                                                    ? <span className="highlight">
                                                        {this.currentProject.tags.map(t => t.toUpperCase()).join(", ")}
                                                    </span>
                                                    : ""
                                            }
                                        </p>
                                        : ""
                                }

                                <div className="clearfix" />

                                {this.getImageHtml(index)}

                            </div>
                        )
                    })
                }

            </div>
        );
    }

    getImageHtml(index) {
        const imageIndex = index * 3;

        if (this.currentProject.media[imageIndex] && !this.currentProject.media[imageIndex + 2])
            return <span className="one-image">{this.getMedia(this.currentProject.media[imageIndex])}</span>
        else if (!this.currentProject.media[imageIndex] && !this.currentProject.media[imageIndex + 2])
            return;

        if (this.isOdd(index))
            return (
                <span className="project--image-box">
                    <div className="img-item small-left">
                        {this.getMedia(this.currentProject.media[imageIndex])}
                        {this.getMedia(this.currentProject.media[imageIndex + 1])}
                    </div>
                    <div className="img-item big-right">
                        {this.getMedia(this.currentProject.media[imageIndex + 2])}
                    </div>
                </span>
            )
        else return (
            <span className="project--image-box">
                <div className="img-item big-left">
                    {this.getMedia(this.currentProject.media[imageIndex])}
                </div>
                <div className="img-item small-right">
                    {this.getMedia(this.currentProject.media[imageIndex + 1])}
                    {this.getMedia(this.currentProject.media[imageIndex + 2])}
                </div>
            </span>
        )
    }

    getMedia(media) {
        // try {
        switch (media.type) {
            case "VIDEO":
                return <video src={
                    // @ts-ignore
                    require(`../../static/${media.filename}`)} />
            case "IMAGE":
            default:
                return <div className="project--img-container">
                    <img
                        alt=""
                        src={
                            // @ts-ignore
                            require(`../../static/${media.filename}`)}
                        title={media.caption} />
                    <span hidden={!media.caption} className="project--img-caption">{media.caption}</span>
                </div>;
        }
    }

    isOdd(number) {
        return number % 2 === 0;
    }

}