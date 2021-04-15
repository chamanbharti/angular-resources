const observable = from([2, 30, 5, 22, 60, 1]);

observable.subscribe({
    next: (value) => console.log("Received", value),
    error: (err) => console.log(err),
    complete: () => console.log("done")
});