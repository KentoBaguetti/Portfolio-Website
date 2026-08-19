import { FaGithub, FaLinkedin } from 'react-icons/fa';

import Experience from './Experience';
import Projects from './Projects';

export default function Home() {
    return (
        <div className="flex min-h-screen justify-center px-6 pt-28 pb-16">
            <div className="w-full max-w-2xl text-left">
                {/* Intro */}
                <div>
                    <div className="mb-6 flex items-center gap-4 text-2xl">
                        <span className="font-semibold">Kentaro Barnes</span>

                        <div className="ml-6 flex items-center gap-3">
                            <a
                                href="https://www.github.com/KentoBaguetti"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub size={24} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/barneskentaro/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="max-w-2xl leading-relaxed">
                        I'm a third year computer science student at the
                        University of British Columbia and an aspiring software
                        engineer interested in learning how to make scalable and
                        efficient systems.
                    </div>

                    <div className="mt-3 max-w-2xl leading-relaxed">
                        I am working as a Software Engineering Intern at Apple
                        and previously interned at Microsoft and various other
                        startups, in fintech and automation.
                    </div>
                    <div className="mt-3 max-w-2xl leading-relaxed">
                        Outside work, I enjoy reading about building systems and
                        hacking together small projects. I also enjoy playing
                        football, badminton, going snowboarding, taking photos,
                        and cooking.
                    </div>
                </div>

                {/* Education */}
                <section className="mt-16">
                    <h2 className="mb-3 text-2xl font-semibold">Education</h2>
                    <div className="leading-relaxed">
                        <div className="flex justify-between">
                            <span>University of British Columbia</span>
                            <span>2024-2028 | Vancouver, CA</span>
                        </div>
                        <div>BSc. Computer Science</div>
                    </div>
                </section>

                {/* Experience */}
                <section className="mt-16">
                    <h2 className="mb-4 text-2xl font-semibold">Experience</h2>

                    <Experience />
                </section>

                {/* Projects */}
                <section className="mt-16">
                    <h2 className="mb-4 text-2xl font-semibold">
                        Some of my projects
                    </h2>

                    <Projects />
                </section>

                {/* Footer */}
                <footer className="mt-20 border-t pt-5 text-center text-sm">
                    © Kentaro Barnes
                </footer>
            </div>
        </div>
    );
}
