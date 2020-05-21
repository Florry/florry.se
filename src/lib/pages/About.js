import React from "react";
import ms from "ms";

export default class About extends React.Component {

    constructor(props) {
        super(props);

        try {
            this.age = Number.parseFloat(ms(Date.now() - new Date("1991-03-21T19:26:51.654Z").getTime())) / 365;
        } catch (err) {
            this.age = 1337;
        }

        this.programmingSkills = [
            "JAVASCRIPT",
            "NODE.js",
            "MONGO DB",
            "MYSQL",
            "ELECTRON",
            "REACT",
            "REACT NATIVE",
            "MOBX",
            "REDUX",
            "ANGULAR.js",
            "ANGULAR",
            "MARKO JS",
            "WEBGL",
            "HTML 5",
            "CSS",
            "AJAX",
            "BOOSTRAP",
            "UNDERSCORE.js",
            "JQUERY",
            "LODASH",
            "KUBERNETES",
            "DEIS",
            "AWS",
            "JAVA >= 7",
            "JAVA EE",
            "LWJGL",
            "VERTX",
            "PLAY",
            "PHP",
            "RUBY",
            "LUA",
            "UNREALSCRIPT",
            "UNREAL KISMET",
            "CRYENGINE FLOWGRAPH",
            "WORDPRESS",
            "ANDROID"
        ];

        this.computerSoftwareSkills = [
            "GIT",
            "BASH",
            "DASH",
            "ZSH",
            "VSCODE",
            "ECLIPSE",
            "SUBLIME",
            "INTELLIJ",
            "WINDOWS",
            "MAC",
            "UBUNTU",
            "YEOMAN",
            "GRUNT",
            "BOWER",
            "AUTODESK 3D STUDIO MAX",
            "AUTODESK MAYA",
            "PIXOLOGIC ZBRUSH",
            "PIXOLOGIC SCULPTRIS",
            "ADOBE PHOTOSHOP",
            "ADOBE ILLUSTRATOR",
            "ADOBE PREMIERE PRO",
            "ADOBE XD",
            "ADOBE AUDITION",
            "ADOBE SOUNDBOOTH",
            "ADOBE FLASH",
            "SCALEFORM",
            "ADOBE DREAMWEAVER",
            "AUDACITY",
            "GIMP",
            "BLENDER",
            "EPIC UDK",
            "XNORMAL",
            "CRYENGINE 2-5",
            "UNREAL ENGINE 3-4",
            "SOURCE ENGINE",
            "NEOAXIS",
            "VALVE WORLDCRAFT/HAMMER",
            "CRYTEK CRYENGINE 2 SANDBOX 2",
            "CRYTEK CRYENGINE 3 SANDBOX 3",
            "CRYTEK CRYENGINE 5 SANDBOX",
        ];
    }

    render() {
        return (
            <div className="container">

                <div>
                    <h2>Viktor Söderström, {this.age.toFixed(0)} years old, game dev,
                        <span className="text-muted"> full stack programmer and <span className="text-italic">computer enthusiast</span>.</span>
                    </h2>
                    <p>
                        Whether it be software, hardware, website creation, game development or texture manipulation. I am there, learning every bit of it and have been since an early age.I love learning new things and solving problems.
                    </p>
                    <p>
                        <h2>More on my <a href="https://www.linkedin.com/in/viktor-s%C3%B6derstr%C3%B6m-6ba02162/" target="linkedin">LinkedIn page</a></h2>
                        <p>...and code @ <a href="http://www.github.com/florry/" target="linkedin">github.com/florry</a></p>
                    </p>
                </div>

                <hr />

                <div className="cv">

                    <div className="cv--item cv--contact-details">

                        <h2>PERSONAL INFO</h2>
                        <p>Name <b>Viktor Söderström</b></p>
                        <p>Location <b> Stockholm, Sweden</b></p>
                        <p> E-mail <b>viktor.soderstrom@live.se</b></p>
                        <p>Date of birth <b>1991-03-21</b></p>
                        <p>Github account: <b><a href="http://www.github.com/florry/" target="_blank" rel="noopener noreferrer">@florry</a></b></p>
                    </div>


                    <div className="cv--item cv--image">
                        <img src={
                            // @ts-ignore
                            require("../../static/img.jpg")
                        } className="cv-img"
                            alt="Viktor Söderström" />

                    </div>

                    <div className="cv--item">
                        <h2>...SOME PROGRAMMING SKILLS</h2>
                        <p className="highlight">{this.programmingSkills.join(", ")}</p>

                        <h2>...SOME COMPUTER SOFTWARE SKILLS</h2>
                        <p className="highlight">{this.computerSoftwareSkills.join(", ")}</p>
                    </div>

                </div>
            </div>
        )
    }

}