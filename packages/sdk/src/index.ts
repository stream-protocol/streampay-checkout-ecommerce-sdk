import { CandyMachine, Nft } from "./modules";

export class StreamPay {
  public candyMachine: CandyMachine;
  public nft: Nft;

  constructor() {
    this.candyMachine = new CandyMachine();
    this.nft = new Nft();
  }
}
