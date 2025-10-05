export const firstColor = "#0965C0";
export const secondColor = "#C53A94";

// Hover
export const hoverButtonColorDark = "dark:hover:bg-[#C53A94]";
export const hoverButtonColorLight = "hover:bg-[#0965C0]";

// Background
export const backgroundFirstColorDark = "dark:bg-[#0965C0]";
export const backgroundSecondColorDark = "dark:bg-[#C53A94]";
export const backgroundHoverSecondColorLight = "hover:bg-[#C53A94]";
export const backgroundHoverFirstColorLight = "hover:bg-[#0965C0]";
export const backgroundHoverSecondColorDark = "dark:hover:bg-[#C53A94]";
export const backgroundHoverFirstColorDark = "dark:hover:bg-[#0965C0]";
export const backgroundFirstColorLight = "bg-[#0965C0]";
export const backgroundSecondColorLight = "bg-[#C53A94]";
export const backgroundGradientColorHoverLight="hover:bg-gradient-to-r from-[#0965C0] to-[#C53A94]";
export const backgroundGradientColorHoverDark="dark:hover:bg-gradient-to-r from-[#0965C0] to-[#C53A94]";
export const backgroundGradientReversedColorHoverLight="hover:bg-gradient-to-r from-[#C53A94] to-[#0965C0]";
export const backgroundGradientReversedColorHoverDark="dark:hover:bg-gradient-to-r from-[#C53A94] to-[#0965C0]";
// Background gradients
export const gradientColor = "bg-gradient-to-r from-[#0965C0] to-[#C53A94]";

export const gradientReservedColor = "bg-gradient-to-r from-[#C53A94] to-[#0965C0]";

// Gradient sides
export const gradientColorLeft = "from-[#0965C0]";
export const gradientColorRight = "to-[#C53A94]";

// Borders
export const gradientColorBorderDark = "dark:border-[#C53A94]";
export const gradientColorBorderLight = "border-[#0965C0]";
export const gradientColorBorderHoverDark = "dark:hover:border-[#0965C0]";
export const gradientColorBorderHoverLight = "hover:border-[#C53A94]";

// Text
export const gradientColorSeconedTextDark = "dark:text-[#C53A94]";
export const gradientColorFirstTextLight = "text-[#0965C0]";
export const gradientColorSecondTextLight = "text-[#C53A94]";
export const gradientColorFirstTextDark = "dark:text-[#0965C0]";

export const gradientTextColor =
  "bg-gradient-to-r from-[#0965C0] to-[#C53A94] bg-clip-text text-transparent";

// inject them as CSS variables
if (typeof document !== "undefined") {
  document.documentElement.style.setProperty("--first-color", firstColor);
  document.documentElement.style.setProperty("--second-color", secondColor);
}
