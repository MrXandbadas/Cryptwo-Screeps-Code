interface Room {
  init(room: string): void;
  initRoomMemory(): void;
  runlogic(room: string): void;
  scan(input: any): any;
}
interface RoomMemory {
  owner: string;
}

interface sourceInfo extends Source {
  id: number;
  pos: number[];
}
