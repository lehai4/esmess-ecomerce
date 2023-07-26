export interface optionSelected {
  value: string;
  label: string;
}
export interface imageProps {
  id_img: number;
  url: string;
  color: string;
}
export interface ProductProps {
  _id: string;
  name: string;
  category: string;
  imageUrl: imageProps[];
  price: number;
  desc: string;
}
export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  name: string;
  phone: string;
  active: boolean;
  role: string;
  admin: boolean;
  image: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
}

interface currentUserProps {
  user?: User | null | undefined;
  accessToken: string;
}
export interface PropLogin {
  currentUser: currentUserProps | null;
  isFetching: boolean;
  error: boolean;
}
export interface PropRegister {
  isFetching: boolean;
  error: boolean;
  success: boolean;
}
export interface PropLogOut {
  isFetching: boolean;
  error: boolean;
}
export interface UsersProp {
  allUsers: User[] | null;
  isFetching: boolean;
  error: boolean;
  message: string;
}
export interface categorySliceProps {
  category: string;
  count: number;
}
