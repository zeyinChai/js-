type IPartial<T> = { [P in keyof T]?: T[P] | undefined };

type IRequired<T> = { [P in keyof T]-?: T[P] };

type IPick<T, K extends keyof T> = { [P in K]: T[P] };

type IRecord<K extends string | number | symbol, T> = { [P in K]: T };

type IOmit<T, K extends string | number | symbol> = {
  [P in Exclude<keyof T, K>]: T[P];
};
