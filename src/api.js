export const getItems = () => {

    return new Promise((resolve => {
        let r = new XMLHttpRequest();
        r.open("GET", "https://e2120fda-a322-4b69-8660-dea5aaec1d54.mock.pstmn.io/getItems", true);
        r.setRequestHeader("Content-Type", "application/json")
        r.onreadystatechange = function () {
            if (r.readyState == 4 && r.status == 200) {
                console.log(r);
                resolve(JSON.parse(r.response));
            }
        };
        r.send();
    }));
}

export const deleteItem = () => {

}
