export type TPayload<T = any> = {
  data: T;
  onSuccess?: (data?: any) => void;
  onError?: (data?: any) => void;
};

export type TPartialPayload<T = any> = Partial<TPayload<T>>;
