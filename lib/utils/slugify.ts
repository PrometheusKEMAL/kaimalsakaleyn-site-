export function slugify(text: string): string {
  if (!text) return "";

  const charMap: Record<string, string> = {
    'İ': 'i',
    'I': 'i',
    'ı': 'i',
    'Ş': 's',
    'ş': 's',
    'Ğ': 'g',
    'ğ': 'g',
    'Ü': 'u',
    'ü': 'u',
    'Ö': 'o',
    'ö': 'o',
    'Ç': 'c',
    'ç': 'c',
    'â': 'a',
    'Â': 'a',
    'î': 'i',
    'Î': 'i',
    'û': 'u',
    'Û': 'u',
  };

  const normalized = text.split('').map(char => charMap[char] || char).join('');

  return normalized
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // Remove combining marks
    .toLowerCase()
    .replace(/['"“”‘’]/g, "") // Remove apostrophes and quotes completely rather than replacing with dash
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with dash
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing dashes
}
