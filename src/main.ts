import * as Profiler from "utils/Profiler";
import { ErrorMapper } from "utils/ErrorMapper";
import "./prototypes/roomorganiser";

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code

const mem: Memory = Memory;
// global.Profiler = Profiler.init();

export class Main {
  public static go() {
    // memory check!
    if (!mem.uuid || Memory.uuid > 1000) {
      mem.uuid = 0;
    }

    for (const i in Game.rooms) {
      const room: Room = Game.rooms[i];

      // Start room Logic
      Object.keys(Game.rooms).forEach(roomName => {
        const thisRoom: Room = Game.rooms[roomName];
        thisRoom.runlogic(thisRoom.name);
      });
    }

    // delete creeps from memory that are no longer needed
    for (const name in Memory.creeps) {
      const creep: any = Memory.creeps[name];
      const room: Room = Game.rooms[creep.room];

      if (creep.room === room.name) {
        if (!Game.creeps[name]) {
          delete Memory.creeps[name];
        }
      }
    }
  }
}

export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`Current game tick is ${Game.time}`);
  Main.go();
});
