import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon" />
                            <h5>Experience</h5>
                            <small>4+ Years working</small>
                        </article>

                        <article className="about_card">
                            <FiUsers className="about_icon" />
                            <h5>Clients</h5>
                            <small>5 Worldwide</small>
                        </article>

                        <article className="about_card">
                            <VscFolderLibrary className="about_icon" />
                            <h5>Projects</h5>
                            <small>5+ Completed</small>
                        </article>
                    </div>
                    <p>
                        Frontend Developer with over 4 years of professional experience designing and
                        building modern, responsive, and user-friendly web applications. Strong expertise in
                        Angular, React, and TypeScript with a clear focus on clean UI architecture, accessibility,
                        and performance. Experienced in Agile product teams across Sweden and Finland,
                        working closely with UX designers, backend engineers, and product owners to deliver
                        scalable, maintainable, and high-quality frontend solutions.
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}