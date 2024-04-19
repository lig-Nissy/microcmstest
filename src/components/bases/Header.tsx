// HEADER COMPONENT
import React from "react";

// Components
import Link from "next/link";

export const BaseHeader = () =>{
    return(
        <header>
            <div>
                <nav>
                    <ul>
                        <li>Top</li>
                        <li>Blog</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}