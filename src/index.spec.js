[4, 5, 6].forEach((duration) => {
  test(`timeout 1 sec x ${duration}`, async () => {
    const start = new Date();
    console.log(`start A-${duration}: ${start.getTime() / 1000}`);

    for (let i = 0; i < duration; i++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log(
            `timeout: ${(new Date().getTime() - start.getTime()) / 1000}`
          );
          resolve('done');
        }, 1000);
      });
    }
    console.log(
      `end A-${duration}: ${(new Date().getTime() - start.getTime()) / 1000}`
    );
    expect('end').toEqual('end');
  });
});

[4, 5, 6].forEach((duration) => {
  test(`timeout ${duration} sec`, async () => {
    const start = new Date();
    console.log(`start B-${duration}: ${start.getTime() / 1000}`);

    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(
          `timeout: ${(new Date().getTime() - start.getTime()) / 1000}`
        );
        resolve('done');
      }, duration * 1000);
    });

    console.log(`end B-${duration}: ${new Date().getTime() / 1000}`);
    expect('end').toEqual('end');
  });
});
