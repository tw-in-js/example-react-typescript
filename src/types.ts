import type { InlineDirective } from 'twind';

export type InlineDirectiveMap<T extends string> = Record<T, InlineDirective>;
