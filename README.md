# e25n -- English Numerical Contraction

It bothered me that the phrase `a11y` is so commonly used in place of
`accessibility`. For one, "accessibility" isn't that hard to type (13
letters) or say (6 syllables).

But worse, there are 12

You've seen these hip contractions before: `a16z`, `i18n`, `a11y`, `l10n`, `g11n`,`k8s`.

Let's call them a _English Numerical Contractions_. A subset of Numeronym, a number-based word.

Programmers are lazy.

One way this materializes is in language: `a16z` instead of `andressianhorowitz` and `i18n` instead of `internationalization`.

Given an input string of English characters, this library will:

- Tell you the abbreviated form
- Tell you if there is an English word whose contraction also maps to your input
- Tell you if you're being annoying by contracting it (more syllables to pronounce the new form)

TODO: Here is a list of all English words that should be contracted

NOTES:

b7w -- bedfellow
b8b: [ 'breadcrumb' ],
b18e: [ 'buckminsterfullerene' ],
d20n: [ 'deinstitutionalization' ],
d19n: [ 'disestablishmentarian' ], // no antidisestablishmentarian
d8x: [ 'dominatrix' ],
d13a: [ 'dysmorphophobia' ],
e9k: [ 'electroweak' ],
e14p: [ 'entrepreneurship' ],
e19m: [ 'establishmentarianism' ],
e5w: [ 'eyebrow' ],
e18y: [ 'existentialistically' ],
f9k: [ 'fiddlestick' ],
f8w: [ 'foreshadow' ],
f14c: [ 'fundamentalistic' ]
g7b: [ 'gastropub' ],
g7z: [ 'gigahertz' ],
h6f: [ 'handcuff' ],
h10f: [ 'handkerchief' ],
h2b: [ 'herb' ],
h7b: [ 'honeycomb' ],
i6b: [ 'interweb' ],
j7k: [ 'jailbreak' ],
j8m: [ 'journalism' ],
o18y: [ 'overenthusiastically' ],
t11k: [ 'thunderstruck' ],
t15m: [ 'transcendentalism' ],
u4u: [ 'ubuntu' ], <<<
w13t: [ 'whatchamacallit' ],
w12r: [ 'whippersnapper' ],
w8c: [ 'workaholic' ],
x3x: [ 'xerox' ],
y8l: [ 'yellowtail' ],


- Largest unique abbreviations
- Larget abbreviations
- Which word has the most collisions (including three letter words)?
- Spoken vs typed efficiency
- Starting letter with most abbreviations
- Starting letter with least abbreviations
- Which letters have the most collisions?
- Distribution of each letter's collisions (aXb, aXc, ..., aXz)
-

Longest word: Pneumonoultramicroscopicsilicovolcano?


Refs
https://en.wiktionary.org/wiki/Category:English_numerical_contractions
https://stackoverflow.com/questions/2632186/why-is-internationalization-shortened-to-i18n
