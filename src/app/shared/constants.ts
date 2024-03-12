export const ONLY_LETTERS = /^[A-Za-z]+$/;
export const ONLY_DIGITS = /^\d+$/;
export const ONLY_SYMBOLS = /^[^\w\s]+$/;
export const LETTERS_SYMBOLS = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/|\\~-])[a-zA-Z!@#$%^&*()_+{}\[\]:;"'<>,.?/|\\~-]+$/;
export const LETTERS_DIGITS = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
export const DIGITS_SYMBOLS = /^(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/|\\~-])[0-9!@#$%^&*()_+{}\[\]:;"'<>,.?/|\\~-]+$/;
export const LETTERS_SYMBOLS_NUMBERS = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/|\\~-])[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;"'<>,.?/|\\~-]+$/;
export const NON_WHITE_SPACE = /^\S*$/;
