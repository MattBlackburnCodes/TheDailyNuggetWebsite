import { useEffect, useMemo, useState } from "react";
import mascot from "../assets/ChickENuggetIcon.png";

const guidePrompts = [
  {
    label: "Inspire me",
    responses: [
      "Start with the smallest honest step. Momentum likes movement.",
      "You do not need the whole plan today. You need the next useful move.",
      "Progress counts even when it arrives quietly.",
    ],
  },
  {
    label: "Teach me something",
    responses: [
      "Tiny daily habits work because they lower the friction between intention and action.",
      "A quote is more useful when you turn it into a question: what can I do with this today?",
      "Curiosity resets attention. One small fact can pull your mind out of autopilot.",
    ],
  },
  {
    label: "Make me laugh",
    responses: [
      "Why did the nugget start journaling? It had too many deep-fried thoughts.",
      "I tried to be mysterious today, but I am literally shaped like a snack.",
      "A tiny laugh still counts as a mood upgrade.",
    ],
  },
  {
    label: "I need encouragement",
    responses: [
      "You are allowed to be tired and still be moving forward.",
      "A rough day does not erase the work you have already done.",
      "Be gentle with yourself. Resetting is still part of the habit.",
    ],
  },
  {
    label: "Surprise me",
    responses: [
      "Chick E. Nugget says: protect your peace like it came with dipping sauce.",
      "Try saving one nugget today and coming back to it tomorrow.",
      "The best daily habit is the one small enough to survive a busy day.",
    ],
  },
];

function getRandomResponse(prompt) {
  const index = Math.floor(Math.random() * prompt.responses.length);
  return prompt.responses[index];
}

export default function NuggetGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePrompt, setActivePrompt] = useState(guidePrompts[0].label);
  const [response, setResponse] = useState(guidePrompts[0].responses[0]);

  const activeMessage = useMemo(() => {
    return {
      prompt: activePrompt,
      response,
    };
  }, [activePrompt, response]);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function handlePromptClick(prompt) {
    setActivePrompt(prompt.label);
    setResponse(getRandomResponse(prompt));
  }

  return (
    <aside className="nugget-guide" aria-label="Nugget Guide assistant">
      <section
        className={isOpen ? "nugget-guide-card is-open" : "nugget-guide-card"}
        id="nugget-guide-card"
        aria-hidden={!isOpen}
      >
        <div className="nugget-guide-card-top">
          <div>
            <p className="challenge-kicker mb-1">Nugget Guide</p>
            <h2>Need a quick nudge?</h2>
          </div>
          <button
            type="button"
            className="nugget-guide-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close Nugget Guide"
          >
            x
          </button>
        </div>

        <div className="nugget-guide-message" aria-live="polite">
          <img src={mascot} alt="" aria-hidden="true" />
          <div>
            <span>{activeMessage.prompt}</span>
            <p>{activeMessage.response}</p>
          </div>
        </div>

        <div className="nugget-guide-prompts">
          {guidePrompts.map((prompt) => (
            <button type="button" key={prompt.label} onClick={() => handlePromptClick(prompt)}>
              {prompt.label}
            </button>
          ))}
        </div>
      </section>

      <button
        type="button"
        className="nugget-guide-button"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        aria-label={isOpen ? "Close Nugget Guide assistant" : "Open Nugget Guide assistant"}
        aria-expanded={isOpen}
        aria-controls="nugget-guide-card"
      >
        <img src={mascot} alt="" aria-hidden="true" />
      </button>
      {!isOpen && <span className="nugget-guide-hint">Click me</span>}
    </aside>
  );
}
