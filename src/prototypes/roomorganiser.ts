/* eslint-disable @typescript-eslint/no-unsafe-member-access */
Room.prototype.init = function init(room: string) {
  const sourceInfo = null;
  const currentRoom = Game.rooms[room];
  const sources: Source[] | undefined | null = Object.values(Game.rooms[room].find(FIND_SOURCES));

  if (!currentRoom.memory || !currentRoom.memory.owner) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    sources.forEach(val => {
      val.id = null;

      console.log(JSON.stringify(sourceInfo));
    });
  }

  this.initRoomMemory();
};

// Put things to be init
Room.prototype.initRoomMemory = function () {
  if (this.controller != undefined && this.controller.my) {
    this.memory.Owner = this.controller.owner.username;

    this.memory.sources = [];
  } else {
  }
};

Room.prototype.scan = function (room: Room): any {};

Room.prototype.runlogic = function runlogic(room: string): void {
  Game.rooms[room].init(room);
};
