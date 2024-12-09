type CurrencyCode =
  | 'NGN' // Nigerian Naira
  | 'USD' // US Dollar
  | 'EUR' // Euro
  | 'GBP' // British Pound
  | 'JPY'; // Japanese Yen
// Add more currency codes as needed

type LocaleCode =
  | 'en-NG' // English (Nigeria)
  | 'en-US' // English (United States)
  | 'en-GB' // English (United Kingdom)
  | 'fr-FR' // French (France)
  | 'ja-JP'; // Japanese (Japan)
// Add more locale codes as needed

interface FormatOptions {
  locale?: LocaleCode;
  currency?: CurrencyCode;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  style?: 'decimal' | 'currency' | 'percent';
  currencyDisplay?: 'symbol' | 'narrowSymbol' | 'code' | 'name';
  notation?: 'standard' | 'scientific' | 'engineering' | 'compact';
  compactDisplay?: 'short' | 'long';
}

const defaultOptions: FormatOptions = {
  locale: 'en-US',
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

/**
 * Creates a type-safe number formatter function with predefined options
 * @param options Configuration options for number formatting
 * @returns A function that formats numbers according to the specified options
 */
const createNumberFormatter = (options: FormatOptions = defaultOptions) => {
  const formatter = new Intl.NumberFormat(options.locale, {
    style: options.style,
    currency: options.currency,
    currencyDisplay: options.currencyDisplay,
    minimumFractionDigits: options.minimumFractionDigits,
    maximumFractionDigits: options.maximumFractionDigits,
    notation: options.notation,
    compactDisplay: options.compactDisplay,
  });

  return (value: number): string => formatter.format(value);
};

// Nigerian Naira formatter
const formatNaira = createNumberFormatter({
  locale: 'en-NG',
  currency: 'NGN',
  style: 'currency',
  currencyDisplay: 'narrowSymbol',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

// Percentage formatter with 1 decimal place
const formatPercent = createNumberFormatter({
  style: 'percent',
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

// Compact number formatter for large numbers
const formatCompact = createNumberFormatter({
  notation: 'compact',
  compactDisplay: 'short',
});

export { createNumberFormatter, type CurrencyCode, type FormatOptions, type LocaleCode };

export { formatCompact, formatNaira, formatPercent };
