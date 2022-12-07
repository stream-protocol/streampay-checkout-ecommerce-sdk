import * as anchor from "@project-serum/anchor";
import dotenv from "dotenv";
import base58 from "bs58";

dotenv.config();

export const CANDY_MACHINE_ID = new anchor.web3.PublicKey(
  "GrVSy3ZRbuw5ACbwSEMsj9gULk9MW7QPK1TUYcP6nLM"
);
export const PAYER = anchor.web3.Keypair.fromSecretKey(
  base58.decode(process.env.PAYER_SECRET_KEY!)
);
export const USER = new anchor.web3.PublicKey(
  "8k1JM5Cd6Hz7G6Jsq1FSzgRYPyS4RFj9k11Uvt5bgWRP"
);
