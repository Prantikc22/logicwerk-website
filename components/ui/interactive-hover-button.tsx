import React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  icon?: React.ReactNode
}

const ACCENT_CLASS = "text-blue-600 font-bold";

function highlightLogicwerk(text: string) {
  // Replace all occurrences of 'Logicwerk' (case-insensitive)
  const regex = /(Logicwerk)/gi;
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <span key={i} className={ACCENT_CLASS}>{part}</span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

const InteractiveHoverButton = React.forwardRef<HTMLButtonElement, InteractiveHoverButtonProps & { wrapTextClassName?: string }>(
  ({ text = "Button", className, icon = <ArrowRight />, wrapTextClassName = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative w-auto min-w-0 max-w-full cursor-pointer overflow-hidden rounded-full border bg-background p-3 px-8 text-center font-semibold whitespace-normal",
          className,
        )}
        {...props}
      >
        <span className={cn("inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 break-words whitespace-normal", wrapTextClassName)}>
          {highlightLogicwerk(text)}
        </span>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 break-words whitespace-normal">
          <span>{highlightLogicwerk(text)}</span>
          {icon}
        </div>
        <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary"></div>
      </button>
    )
  },
)


InteractiveHoverButton.displayName = "InteractiveHoverButton"

export { InteractiveHoverButton }
