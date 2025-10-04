// avatarColors.ts
export enum AvatarColor {
  Blue = "Blue",
  Green = "Green",
  Red = "Red",
  Orange = "Orange",
  Purple = "Purple",
  Grey = "Grey",
}

// Mappa AvatarColor a classi Tailwind
export const avatarColorMap: Record<AvatarColor, string> = {
  [AvatarColor.Blue]: "bg-blue-600",
  [AvatarColor.Green]: "bg-green-500",
  [AvatarColor.Red]: "bg-red-500",
  [AvatarColor.Orange]: "bg-orange-500",
  [AvatarColor.Purple]: "bg-purple-500",
  [AvatarColor.Grey]: "bg-gray-400",
};
