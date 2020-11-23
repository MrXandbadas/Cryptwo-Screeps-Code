interface Room {
  runlogic(room: string): void;
  scan(input: any): ScanObject | boolean;
}

interface ScanRoom {
  out: any;
}
