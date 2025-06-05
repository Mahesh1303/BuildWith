import bcrypt from "bcrypt";

const saltround = 10;

export const hashPass = async (password: string) => {
  try {
    const hashPas: string = await bcrypt.hash(password, saltround);
    if (!hashPas) {
      const error: string = "error generating hash for the password";
    }

    return hashPas;
  } catch (error) {
    console.log("error while hashing the passeword", error);
  }
};

export const verifyPass = async (password: string, hash: string) => {
  try {
    const compare = await bcrypt.compare(password, hash);
    if (!compare) {
      const error: string = "incorrect password";
    }
    return compare;
  } catch (error) {
    console.log(error);
  }
};
