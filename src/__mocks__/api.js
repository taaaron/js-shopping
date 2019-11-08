import ItemModel from "../item/item.model";

let itemList = [
    new ItemModel('OtherThing', 11),
    new ItemModel('FinalThing', 1200, true)
];

export const getItems = () => {
    return new Promise((resolve) => {
        resolve(itemList);
    });
};

export const deleteItem = (itemToBeDelete) => {
    return new Promise((resolve) => {
        resolve([
            itemList.filter(item => item !== itemToBeDelete)
        ])
    })
}