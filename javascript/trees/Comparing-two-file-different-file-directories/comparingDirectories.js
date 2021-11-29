const fs = require("fs").promises;
const compareDirectories = async (dir1, dir2) => {
  const _getFilesLength = async (path) => {
    const queue = [];
    let tracker = 0;
    const dir = await fs.opendir(path);
    for await (const dirent of dir) {
      dirent.path = dir.path;
      queue.push(dirent);
    }

    while (queue.length) {
      let currentNode = queue.shift();
      if (currentNode.isFile()) tracker++;
      else {
        const newDir = await fs.opendir(
          currentNode.path + "/" + currentNode.name
        );
        for await (const dirent of newDir) {
          dirent.path = dir.path;
          queue.push(dirent);
        }
      }
    }
    return tracker;
  };
  const dir1res = await _getFilesLength(dir1);
  const dir2res = await _getFilesLength(dir2);
  console.log(dir2res, dir1res);
  return dir1res === dir2res;
};

compareDirectories(
  "/home/ahmadjallad/asac/data-structures-and-algorithms/javascript/trees",
  "/home/ahmadjallad/asac/data-structures-and-algorithms/javascript/stack-and-queue"
).then((res) => console.log(res));
