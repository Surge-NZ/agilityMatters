// what do we need this for? -J

/* 
The code snippet export const isBrowser = () => typeof window !== "undefined"; is used to check if the JavaScript code is running in a browser environment.

In JavaScript, the typeof operator is used to determine the type of a value. In this case, typeof window is used to check if the window object exists. The window object is only available in a browser environment, so if the code is running in a browser, typeof window will return "object". If the code is running in a non-browser environment, window will be undefined, and typeof window will return "undefined".

The code snippet defines an exported function named isBrowser that returns true if the code is running in a browser environment (i.e., typeof window is "object"), and false otherwise.

By using this isBrowser function, you can conditionally execute browser-specific code or handle scenarios where certain browser-specific features or objects are required.
*/

export const isBrowser = () => typeof window !== "undefined";
