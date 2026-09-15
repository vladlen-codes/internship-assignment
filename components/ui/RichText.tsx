import { Fragment } from "react";
import type { Rich } from "@/content/types";

// *word* renders as the script accent, _text_ as italic.
const TOKEN = /(\*[^*\n]+\*|_[^_\n]+_|\n)/g;

export function RichText({ text }: { text: Rich }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (part === "\n") return <br key={i} />;
        if (part.length > 2 && part.startsWith("*") && part.endsWith("*")) {
          return (
            <span key={i} className="script-accent">
              {part.slice(1, -1)}
            </span>
          );
        }
        if (part.length > 2 && part.startsWith("_") && part.endsWith("_")) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
