export const parseRequest: Function = (requestBody: any, objectKeys: string[]): any => {
    const result: any = {};

    objectKeys.forEach((key: string) => {
        if (requestBody[key] !== undefined) {
            result[key] = requestBody[key];
        }
    });

    return Object.keys(result).length === 0 ? null : result;
};

