import React from "react";
import Portfolio from "./lib/pages/Portfolio";
import About from "./lib/pages/About";
import Project from "./lib/pages/Project";

// @ts-ignore
import projects from "./lib/content/projects.json";

import "./static/css/App.css";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        const lastIndexOfSlash = window.location.pathname.lastIndexOf("/");

        this.page = window.location.pathname.substring(0, lastIndexOfSlash > 0 ? lastIndexOfSlash : window.location.pathname.length);
    }

    render() {
        return (
            <div>

                <div className="header-bg">
                    <div className="header">
                        <div className="name">
                            <a href="/" className="full-name">Viktor Söderström<span className="highlight"> [Florry.se]</span></a>
                            <a href="/" className="short-name" hidden>V.Söderström</a>
                        </div>
                        <div className="menu">
                            <a href="/"><span className={`btn first ${!this.pageIsActive("/about") ? "selected" : ""}`}>Portfolio</span></a>
                            <a href="/about"><span className={`btn ${this.pageIsActive("/about") ? "selected" : ""}`}>About</span></a>
                        </div>
                    </div>
                </div>

                <div className="content" >
                    {this.getActivePage()}
                    <br />
                    <div className="footer">

                        <a href="mailto:viktor.soderstrom@live.se">viktor.soderstrom@live.se | </a><a href="http://www.github.com/florry/" target="github" rel="noopener noreferrer">Github</a>
                    </div>

                </div>

            </div>
        );
    }

    getActivePage() {
        switch (this.page) {
            case "/about":
                return <About />;
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