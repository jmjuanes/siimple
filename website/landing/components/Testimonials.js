import React from "react";
import {Link} from "./Link.js";

// Testimonials data
const testimonialsData = [
    {
        site: "Designmodo",
        title: "10 Smallest & Fastest Frontend Web Dev Frameworks",
        content: "This is a really cool framework for rapid prototyping or for building custom layouts without starting from scratch.",
        url: "https://designmodo.com/frontend-web-dev-frameworks/"
    },
    {
        site: "Colorlib",
        title: "Top 21 Best Free CSS3 Frameworks for Web Development 2018",
        content: "Siimple is a concise, flexible, beautiful, certainly minimal, front-end CSS framework that serves as the foundation for building FLAT and clean design web pages",
        url: "https://colorlib.com/wp/free-css3-frameworks/"
    },
    {
        site: "TemplateToaster",
        title: "9 Best Responsive Web Design Frameworks",
        content: "Flexible, aesthetically built and a concise front-end CSS framework to accomplish clean web pages.",
        url: "https://blog.templatetoaster.com/best-responsive-web-design-frameworks/"
    }
];

export const Testimonials = () => (
    <div className="columns has-mb-none">
        {testimonialsData.map((item, key) => (
            <div key={key} className="column is-full-mobile">
                <div style={{"minHeight": "300px"}} className="has-p-8 is-rounded has-bg-light">
                    <div className="has-mb-3 has-text-primary">
                        <i className="si-quote has-size-8" />
                    </div>
                    <Link to={item.url} target="_blank" className="has-text-dark">
                        <div className="title is-4">{item.site}</div>
                    </Link>
                    <div className="has-mb-none has-text-dark is-semitransparent">
                        {item.content}
                    </div>
                </div>
            </div>
        ))}
    </div>
);
