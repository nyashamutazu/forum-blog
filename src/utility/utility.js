export const updatedObject = (oldObject, updatedPropertises) => {
    return {
        ...oldObject,
        ...updatedPropertises
    }
};
