import React from "react";
import ms from "ms";

export default class CV extends React.Component {

    constructor(props) {
        super(props);

        try {
            this.age = Number.parseFloat(ms(Date.now() - new Date("1991-03-21T19:26:51.654Z").getTime())) / 365;
        } catch (err) {
            this.age = 1337;
        }

        this.programmingSkills = [
            "JAVA", "VERTX",
            "UNREALSCRIPT", "JAVASCRIPT",
            "REACT",
            "REDUX", "ANGULAR.js",
            "ANGULAR", "MARKO JS",
            "UNDERSCORE.js", "NODE.js",
            "DEIS", "KUBERNETES",
            "UNREAL KISMET", "CRYENGINE FLOWGRAPH",
            "PHP", "RUBY",
            "LUA", "HTML 5",
            "CSS 3", "JQUERY",
            "AJAX", "PLAY FRAMEWORK",
            "LWJGL", "MYSQL",
            "ANDROID", "BOOSTRAP",
            "WORDPRESS",
            "LODASH"
        ].sort();
        this.computerSoftwareSkills = [
            "WINDOWS", "MAC",
            "YEOMAN", "GRUNT", "BOWER",
            "UBUNTU", "ADOBE PHOTOSHOP",
            "ADOBE FLASH", "ADOBE ILLUSTRATOR",
            "ADOBE PREMIERE PRO", "ADOBE DREAMWEAVER",
            "ADOBE AUDITION", "ADOBE SOUNDBOOTH",
            "ADOBE XD", "AUDACITY",
            "SCALEFORM", "PAINT SHOP PRO",
            "GIMP", "BLENDER",
            "AUTODESK 3D STUDIO MAX", "AUTODESK MAYA",
            "PIXOLOGIC ZBRUSH",
            "PIXOLOGIC SCULPTRIS", "GOOGLE SKETCHUP",
            "CRAZYBUMP", "VALVE WORLDCRAFT/HAMMER",
            "DICE BATTLECRAFT VIETNAM", "DICE BATTLEFIELD 2 EDITOR",
            "CRYTEK CRYENGINE 2 SANDBOX 2", "CRYTEK CRYENGINE 3 SANDBOX 3",
            "CRYTEK CRYENGINE 5 SANDBOX", "NEOAXIS",
            "EPIC UDK", "ECLIPSE",
            "INTELLIJ", "SUBLIME",
            "VSCODE", "XNORMAL",
            "GIT", "CRYENGINE 2-5", "UNREAL ENGINE 3-4",
            "SOURCE ENGINE", "BASH",
            "DASH", "ZSH"
        ].sort();
    }

    render() {
        return (
            <div className="container">

                <div>
                    <h2>Viktor Söderström, {this.age.toFixed(0)} years old, game dev,
                        <span className="text-muted"> full stack programmer and 'computer enthusiast'.</span>
                    </h2>
                    <p>
                        Whether it be software, hardware, website creation, game development or texture manipulation. I am there, learning every bit of it and have been since an early age.
                        <br />
                        I love learning new things and solving problems.
                    </p>
                    <p>
                        <a href="http://www.github.com/florry/" target="github" rel="noopener noreferrer">Github</a> | <a href="http://www.twitter.com/grimarchstudios" target="twitter" rel="noopener noreferrer">Twitter</a>
                    </p>
                </div>

                <hr />
                <h2>CV</h2>
                <div className="cv">

                    <div className="cv--item cv--contact-details">

                        <h2>PERSONAL INFO</h2>
                        <p>Name <b>Viktor Söderström</b></p>
                        <p>Location <b> Stockholm, Sweden</b></p>
                        <p> E-mail <b>viktor.soderstrom@live.se</b></p>
                        <p>Date of birth <b>1991-03-21</b></p>
                        <p>Github account: <b><a href="http://www.github.com/florry/" target="_blank" rel="noopener noreferrer">@florry</a></b></p>

                        <h2>AIM</h2>
                        <p>My aim is to be working with something fun, meaningful and interesting. Where I'm challenged in my work and I learn something new everyday.</p>

                        <h2>PERSONAL QUALITIES</h2>
                        <p> I'm an easy- and fast learner, incredibly creative, an initiative taker and very precise in my work.</p>

                    </div>

                    <div className="cv--item">
                        <img src={
                            // @ts-ignore
                            require("../../static/img.jpg")
                        } className="cv-img"
                            alt="Viktor Söderström" />

                    </div>

                    <div className="cv--item">
                        <h2>EMPLOYMENTS</h2>

                        <div>
                            <p><b>Frost Experience AB</b> - Stockholm</p>
                            <p className="highlight">March 2015 – Current</p>
                            <p>Software developer, full stack. Java, vertx, node js, angular js/angular, react, marko js, lwjgl and more.</p>
                        </div>

                        <hr />

                        <div>
                            <p><b>Grimarch Studios Handelsbolag</b> - Stockholm</p>
                            <p className="highlight">August 2010 – Current</p>
                            <p>Game development and startup. Unrealscript, level design, 3d modeling, texturing, scaleform, sound design, animation and more.</p>
                        </div>

                        <hr />

                        <div>
                            <p><b>Salems Kommun</b> - Salem</p>
                            <p className="highlight">August 2007 – August 2007</p>
                            <p>Planing and painting Säby school over a period of 3 weeks.</p>
                        </div>

                    </div>

                    <div className="cv--item">
                        <h2>PROGRAMMING AND SCRIPTING SKILLS</h2>
                        <p className="highlight">{this.programmingSkills.join(", ")}</p>

                        <h2>COMPUTER SOFTWARE SKILLS</h2>
                        <p className="highlight">{this.computerSoftwareSkills.join(", ")}</p>
                    </div>

                    <div className="cv--item">
                        <h2>EDUCATION</h2>

                        <div>
                            <p><b>System development with java</b> - YHC3L, Stockholm</p>
                            <p className="highlight">August 2013 – May 2015</p>
                            <p>System development with java and the biggest java and javascript frameworks.</p>
                        </div>

                        <hr />

                        <div>
                            <p><b>Certifierad Agil Projektledare</b> - CAP, Stockholm</p>
                            <p className="highlight">September 2011 – July 2012</p>
                            <p>Project management with a focus on agile processes and most importantly; scrum.</p>
                        </div>

                        <hr />

                        <div>
                            <p><b>It-Gymnasiet</b> - Flemingsberg</p>
                            <p className="highlight">August 2007 – June 2010</p>
                            <p>Upper secondary school - IT, electronics and natural science.</p>
                        </div>

                        <hr />

                        <div>
                            <p><b>Rönninge Skola</b> - Rönninge</p>
                            <p className="highlight">August 1998 – June 2007</p>
                            <p>Junior School.</p>
                        </div>

                    </div>

                    <div className="cv--item">
                        <h2>INTERNSHIPS</h2>

                        <div>
                            <p><b>Frost Experience AB, Stockholm</b></p>
                            <p className="highlight">October 2014 – May 2015</p>
                            <p> Software development, frontend and backend.</p>
                        </div>

                        <hr />

                        <div>
                            <p> <b>Grimarch Studios Handelsbolag, Stockholm</b></p>
                            <p className="highlight">April 2012 – June 2012</p>
                            <p>10 weeks of project management and working according to scrum. During the certifierad agil projektledare education.</p>
                        </div>

                        <hr />

                        <div>
                            <p><b>IT-Gymnasiet Sverige AB, Huddinge, Flemingsberg</b></p>
                            <p className="highlight"> March 2009 </p>
                            <p>Teaching computer knowledge (Microsoft Office) to fifth graders. Planning and executing over a period of two weeks.</p>
                        </div>

                        <hr />

                        <div>
                            <p><b>DMV Data HB, Rönninge</b></p>
                            <p className="highlight"> January 2008 </p>
                            <p>Reinstallation of computers and systems.</p>
                        </div>

                    </div>

                    <div className="cv--item">
                        <h2>CERTIFICATES</h2>

                        <p><b><a href="https://www.scrum.org/professional-scrum-master-i-certification"
                            target="_blank"
                            rel="noopener noreferrer">Professional Scrum Master 1</a></b></p>
                    </div>

                    <div className="cv--item">
                        <h2>LANGUAGE SKILLS</h2>
                        <p><b>Swedish</b> - Mother tongue</p>
                        <p><b>English</b> - Fluent</p>
                    </div>

                </div>
            </div>
        )
    }

}