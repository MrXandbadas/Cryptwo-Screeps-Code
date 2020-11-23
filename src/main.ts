import { ErrorMapper } from "utils/ErrorMapper";

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`Current game tick is ${Game.time}`);

  Object.keys(Memory.creeps).forEach(i => {
    if (Game.creeps[i] == undefined || null) {
        delete Memory.creeps[i];
        }
    })

    // Start room Logic
    Object.keys(Game.rooms).forEach(roomName => {
        Game.rooms[roomName].runLogic()
    })
});
