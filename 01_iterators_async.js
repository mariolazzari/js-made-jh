function getId(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Got id: ${id}`);
      resolve(id);
    }, 1000);
  });
}

const ids = [10, 20, 30];

(async () => {
  for (const id of ids) {
    await getId(id);
  }
})();

// dont use forEach with async
