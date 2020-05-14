import React from "react";
import { Link } from "gatsby";
import { Image, SEO } from "@components";

const IndexPage = () => (
    <>
        <SEO title="Home" />
        <h1>h1. Bootstrap heading</h1>
        <h2>h2. Bootstrap heading</h2>
        <h3>h3. Bootstrap heading</h3>
        <h4>h4. Bootstrap heading</h4>
        <h5>h5. Bootstrap heading</h5>
        <h6>h6. Bootstrap heading</h6>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <p>
            You can use the mark tag to <mark>highlight</mark> text.
        </p>
        <p>
            <del>This line of text is meant to be treated as deleted text.</del>
        </p>
        <p>
            <s>This line of text is meant to be treated as no longer accurate.</s>
        </p>
        <p>
            <ins>This line of text is meant to be treated as an addition to the document.</ins>
        </p>
        <p>
            <u>This line of text will render as underlined</u>
        </p>
        <p>
            <small>This line of text is meant to be treated as fine print.</small>
        </p>
        <p>
            <strong>This line rendered as bold text.</strong>
        </p>
        <p>
            <em>This line rendered as italicized text.</em>
        </p>
        <p>
            <abbr title="attribute">attr</abbr>
        </p>
        <p>
            <abbr title="HyperText Markup Language">HTML</abbr>
        </p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <blockquote>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                ante.
            </p>
        </blockquote>
        <blockquote>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                ante.
            </p>
            <footer>
                Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
        </blockquote>
        <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>
                Nulla volutpat aliquam velit
                <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                </ul>
            </li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
        </ul>
        <Link to="/page-2/">Go to page 2</Link>
    </>
);

export default IndexPage;
