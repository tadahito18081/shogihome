import { ImmutablePosition, Move } from "@/shogi";

export enum USIInfoSender {
  BLACK_PLAYER = "blackPlayer",
  WHITE_PLAYER = "whitePlayer",
  RESEARCHER = "researcher",
}

export type USIInfoCommand = {
  depth?: number;
  seldepth?: number;
  timeMs?: number;
  nodes?: number;
  pv?: string[];
  multipv?: number;
  scoreCP?: number;
  scoreMate?: number;
  lowerbound?: boolean;
  upperbound?: boolean;
  currmove?: string;
  hashfullPerMill?: number;
  nps?: number;
  string?: string;
};

export function parseUSIPV(
  position: ImmutablePosition,
  usiPv: string[]
): Move[] {
  const pv: Move[] = [];
  const pos = position.clone();
  for (const oneOfUsiPv of usiPv) {
    const move = pos.createMoveByUSI(oneOfUsiPv);
    if (!move || !pos.doMove(move)) {
      break;
    }
    pv.push(move);
  }
  return pv;
}
