import React from "react";
import Portfolio from "./lib/pages/Portfolio";
import CV from "./lib/pages/CV";
import Project from "./lib/pages/Project";

// @ts-ignore
import projects from "./lib/content/projects.json";

import "./static/css/App.css";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.fadein = 0;

        setTimeout(() => {
            this.fadein = 1;
            this.forceUpdate();
        }, 100);

        const lastIndexOfSlash = window.location.pathname.lastIndexOf("/");
        this.page = window.location.pathname.substring(0, lastIndexOfSlash > 0 ? lastIndexOfSlash : window.location.pathname.length);
    }

    render() {
        return (
            <div className="App" style={{ opacity: this.fadein }}>

                <div className="header-bg">
                    <div className="header">
                        <div className="name">
                            <a href="/">Viktor Söderström<span className="highlight"> [Florry.se]</span></a>
                        </div>
                        <div className="menu">
                            <a href="/"><span className={`btn first ${!this.pageIsActive("/cv") ? "selected" : ""}`}>Portfolio</span></a>
                            <a href="/cv"><span className={`btn ${this.pageIsActive("/cv") ? "selected" : ""}`}>CV</span></a>
                        </div>
                    </div>
                </div>

                <div className="content" style={{ opacity: this.fadein }}>
                    {this.getActivePage()}
                    <br />
                    <div className="footer">

                        viktor.soderstrom@live.se | <a href="http://www.github.com/florry/" target="github" rel="noopener noreferrer">Github</a>
                    </div>

                </div>

            </div>
        );
    }

    getActivePage() {
        switch (this.page) {
            case "/cv":
                return <CV />;
            case "/project":
                return <Project projects={projects} />;
            default:
                return <Portfolio projects={projects} />;
        }
    }

    pageIsActive(page) {
        return page === this.page;
    }

}