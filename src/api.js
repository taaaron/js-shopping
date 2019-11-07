export const getItems = () => {

    return new Promise((resolve => {
        let r = new XMLHttpRequest();
        r.open("GET", "http://localhost:8080/getItems", true);
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
