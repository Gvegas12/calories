import type { NavigateFunction } from "react-router-dom";
import type { StoreApi } from "zustand";
import type { UseBoundStoreWithEqualityFn } from "zustand/traditional";


// NOT USED
export const storeWithNavigate =
  <T>(
    navigate: NavigateFunction,
    store: (
      navigate: NavigateFunction
    ) => UseBoundStoreWithEqualityFn<StoreApi<T>>
  ) =>
  (selector: (state: T) => T) =>
    store(navigate)(selector);
