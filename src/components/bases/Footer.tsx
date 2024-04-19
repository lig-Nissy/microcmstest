// HEADER COMPONENT
import React from "react";

// Components
import Link from "next/link";

// Style
// import styles from "@/styles/components/BaseFooter.module.scss";

export const BaseFooter = () =>{
    return(
        <footer>
            <div>
                <ul>
                    <li>Top</li>
                    <li>Blog</li>
                </ul>
            </div>
            <small>&copy;コピーライト</small>
        </footer>
    )
}