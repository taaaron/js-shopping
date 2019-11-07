import ItemModel from "../item/item.model";

export const getItems = () => {
    return new Promise((resolve) => {
        resolve([
            new ItemModel('OtherThing', 11),
            new ItemModel('FinalThing', 1200, true)
        ]);
    });
};

export const deleteItem = () => {
    return new Promise((resolve, ))
}