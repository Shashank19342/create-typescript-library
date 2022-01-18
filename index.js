"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
// function to sort
function sort(data, sortByColumn, type) {
    if (type == 1) {
        let sortedData;
        if (sortByColumn == "firstname") {
            sortedData = data.sort((a, b) => (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0));
        }
        else if (sortByColumn == "lastname") {
            sortedData = data.sort((a, b) => (a.last_name > b.last_name) ? 1 : ((b.last_name > a.last_name) ? -1 : 0));
        }
        else if (sortByColumn == "email") {
            sortedData = data.sort((a, b) => (a.email > b.email) ? 1 : ((b.last_name > a.email) ? -1 : 0));
        }
        else if (sortByColumn == "web") {
            sortedData = data.sort((a, b) => (a.web > b.web) ? 1 : ((b.web > a.web) ? -1 : 0));
        }
        else {
            sortedData = data.sort((a, b) => (a.age > b.age) ? 1 : ((b.age > a.age) ? -1 : 0));
        }
        return sortedData;
    }
    else {
        let sortedData;
        if (sortByColumn == "firstname") {
            sortedData = data.sort((a, b) => (a.first_name > b.first_name) ? -1 : ((b.first_name > a.first_name) ? 1 : 0));
        }
        else if (sortByColumn == "lastname") {
            sortedData = data.sort((a, b) => (a.last_name > b.last_name) ? -1 : ((b.last_name > a.last_name) ? 1 : 0));
        }
        else if (sortByColumn == "email") {
            sortedData = data.sort((a, b) => (a.email > b.email) ? -1 : ((b.last_name > a.email) ? 1 : 0));
        }
        else if (sortByColumn == "web") {
            sortedData = data.sort((a, b) => (a.web > b.web) ? -1 : ((b.web > a.web) ? 1 : 0));
        }
        else {
            sortedData = data.sort((a, b) => (a.age > b.age) ? -1 : ((b.age > a.age) ? 1 : 0));
        }
        return sortedData;
    }
}
exports.sort = sort;
