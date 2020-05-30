import axios from "axios";
import React, { useState, useRef } from "react";
import styles from "./newsletter.style";
import { useTheme } from "@context/theme-context";
import { Button } from "@components";

const Newsletter = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const nameRef = useRef<HTMLInputElement>(null);
    const { dark } = useTheme();

    const onSubmitNewsletter = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");
        const info: { [key: string]: any } = {
            name,
            email
        };

        const formBody = [];
        for (const property in info) {
            const encodedKey = encodeURIComponent(property);
            const encodedValue = encodeURIComponent(info[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        const formBodyString = formBody.join("&");
        axios
            .post("https://alialaa.net/newsletter/signup.php", formBodyString, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                }
            })
            .then(response => {
                setLoading(false);
                setError("");
                setSuccess(response.data);
            })
            .catch(error => {
                setLoading(false);
                setSuccess("");
                // if (nameRef.current) {
                //     nameRef.current.focus();
                // }
                const errorMessage =
                    error && error.response && error.response.data
                        ? error.response.data
                        : "An error has occured! Please try again later.";
                setError(errorMessage);
            });
    };
    return (
        <div className="newsletter" css={styles}>
            <h3>Newsletter</h3>
            <p>Subscribe to get notified whenever I release new courses, articles or tutorials.</p>
            <div
                className={`message ${error ? "error" : ""} ${success ? "success" : ""}`}
                aria-live="polite"
            >
                {loading ? (
                    <span className="visually-hidden">Subscribing to newsletter</span>
                ) : (
                    error || success
                )}
            </div>
            <form onSubmit={onSubmitNewsletter}>
                <input
                    ref={nameRef}
                    type="text"
                    value={name}
                    aria-label="Name (Optional)"
                    name="newsletter_name"
                    placeholder="Name (Optional)"
                    onChange={e => {
                        setName(e.target.value);
                    }}
                />
                <input
                    type="email"
                    name="newsletter_email"
                    aria-label="Email"
                    placeholder="Email"
                    value={email}
                    onChange={e => {
                        setEmail(e.target.value);
                    }}
                />
                <div style={{ textAlign: "right" }}>
                    <Button disabled={loading} dark type="submit">
                        Subscribe<span className="visually-hidden"> to newsletter</span>
                    </Button>
                </div>
            </form>
        </div>
    );
};
export default Newsletter;
