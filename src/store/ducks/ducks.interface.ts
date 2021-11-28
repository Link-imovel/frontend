interface Action<T = any> {
  payload?: Record<string, T>;
  type: string;
}

type Sagas<T = any> = T & {
  type: string;
};

export type { Action, Sagas };
