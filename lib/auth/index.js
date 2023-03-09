import { hash, compare } from "bcryptjs";

export const hashPassword = async (password) => {
  return await hash(password, 12);
};

export const verifyPassword = async (pass, hashedPass) => {
  return await compare(pass, hashedPass);
};
