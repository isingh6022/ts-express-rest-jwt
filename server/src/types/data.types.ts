interface BaseDataContainer<Q, T> {
  get(q: Q): Promise<T | null>;
  save(t: T): Promise<boolean>;
  update(t: T, q?: Q): Promise<boolean>;
  delete(val: Q | T): Promise<boolean>;
  contains(val: Q | T): Promise<boolean>;
}

interface AppDAO<Q, T> extends BaseDataContainer<Q, T> {}
interface AppCache<Q, T> extends BaseDataContainer<Q, T> {
  setTimeToLive(ms: number): void;
  setMaxSize(n: number): void;
}

/**
 * User
 */
interface UserModelForDAO {
  id: string;
  // name: string;
  username: string;
  timeStamp: number;
  password: string;
  // preferences: {
  //   stocksIds: string[];
  // };
}

enum AuthType {
  O_AUTH = 'o auth',
  LOGIN = 'login'
}
interface User extends UserModelForDAO {}
interface UserLoginCredentials {
  username: string;
  password: string;
}

/**
 * Stocks
 */
interface StockModelForDAO {
  identifier1: string;
  identifier2: string;
  currPrice: number;
}
interface Stock {
  id: string;
  name: string;
  price: number;
}

export type {
  AppDAO,
  AppCache,
  User,
  UserModelForDAO,
  UserLoginCredentials,
  StockModelForDAO,
  Stock
};
