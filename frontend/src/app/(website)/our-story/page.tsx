import React from "react";
import { constructMetadata } from "@/seo/metadata";
import OurStoryClient from "./OurStoryClient";

export const metadata = constructMetadata({
    title: "Our Story — Mission & Vision for Global Education",
    description:
        "Discover HighEd's story, mission, and student-first philosophy in guiding students from Chennai and Tamil Nadu to premier universities worldwide.",
    path: "/our-story",
    keywords: [
        "about highed",
        "highed story",
        "study abroad consultants mission",
        "overseas education philosophy chennai",
    ],
});

export default function OurStoryPage() {
    return <OurStoryClient />;
}
