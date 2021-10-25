import React from "react";
import FooterText from "../atoms/FooterText";

export default function ErrorCard({ text, link }: ErrorCardProps) {
  return <FooterText text={text} link={link} />;
}

interface ErrorCardProps {
  text: string;
  link?: string;
}
