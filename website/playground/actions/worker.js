import kofi from "kofi";

// Compile siimple
export const compile = (worker, config) => {
    return new Promise(resolve => {
        const id = kofi.tempid();
        const onMessage = event => {
            if (event.data?.id === id) {
                worker.removeEventListener("message", onMessage);
                return resolve(event.data);
            }
        };
        worker.addEventListener("message", onMessage);
        worker.postMessage({
            id: id,
            config: config,
        })
    });
};
