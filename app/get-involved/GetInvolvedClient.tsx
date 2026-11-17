"use client"
import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Register2027 from "../components/Register2027"

export default function GetInvolvedPage() {
    return (
        <div style={{ fontFamily: "'General Sans','Inter',system-ui,sans-serif", background: "#000000", color: "#FFFFFF", width: "100%", overflowX: "hidden" }}>
            <Nav />
            <Register2027 headingAs="h1" />
            <Footer />
        </div>
    )
}
