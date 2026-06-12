export function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
// TODO: use clsx and twMerge instead of raw join
