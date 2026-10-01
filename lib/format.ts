const CURRENCY = "INR";
const LOCALE = "en-IN"; 

const money0 = new Intl.NumberFormat(LOCALE, { style: "currency", currency: CURRENCY, maximumFractionDigits: 0 });
const money2 = new Intl.NumberFormat(LOCALE, { style: "currency", currency: CURRENCY, minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const money = (n: number) => money0.format(Math.round(n));
export const moneyExact = (n: number) => money2.format(n);

export const date = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });