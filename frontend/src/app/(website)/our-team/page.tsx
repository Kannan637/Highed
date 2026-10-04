import React from "react";
import { constructMetadata } from "@/seo/metadata";
import OurTeamClient from "./OurTeamClient";

export const metadata = constructMetadata({
    title: "Our Advisory Team — Study Abroad Mentors & Leadership",
    description:
        "Meet the leadership and specialized advisory desks at HighEd guiding students across Tamil Nadu to top universities in the USA, UK, Canada, Australia, Germany, Ireland, and Dubai.",
    path: "/our-team",
    keywords: [
        "highed team",
        "study abroad counsellors chennai",
        "overseas education advisors tamil nadu",
        "kannan c highed",
        "study abroad mentors",
    ],
});

export default function OurTeamPage() {
    return <OurTeamClient />;
}