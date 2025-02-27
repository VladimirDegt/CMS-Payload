import type { CollectionBeforeOperationHook } from "payload";

export const beforeOperationHook: CollectionBeforeOperationHook = async ({
  args,
  operation,
}) => {
  console.log("operation -->", operation);
  return args; // return modified operation arguments as necessary
};
