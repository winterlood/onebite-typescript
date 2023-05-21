/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;

/**
 * 조건부 타입
 */

type User = {
  id: number;
  name: string;
  age: number;
};

type Partial = {
  [key in keyof User]?: User[key];
};

type Readonly = {
  readonly [key in keyof User]: User[key];
};

type BoolUser = {
  [key in keyof User]: boolean;
};

function fetchUser(): User {
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

function updateUser(user: User) {
  // ... 유저 정보를 수정하는 기능
}

updateUser({
  id: 1,
  name: "이정환",
  age: 27,
});
