// Compile siimple
export const compile = (worker, config) => {
    return new Promise(resolve => {
        const id = Math.random().toString(36).slice(2, 9) + Date.now().toString(36);
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
