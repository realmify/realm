export const UPPERCASE_ALPHABET_REGEX = /([A-Z])+/g;

export const SPECIAL_CHARS_REGEX = /(?=[A-Z])|[.\-\s_]/;

export const CSS_CUSTOM_SELECTOR_REGEX =
  /:host\(\[\\([#@][a-zA-Z0-9-_.]+?)\](\[(global)\])?(\[(eq|neq|gt|gte|lt|lte|contains)="(\w+?)"\])?\)/g;

export const DOT_NOTATION_REGEX = /[$|#|@|!]([.]?(?:\w+[.-])*\w+)/gm;
