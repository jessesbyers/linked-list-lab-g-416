function getName(node) {
    return node.name
}

function headNode(list, collection) {
    return collection[list]
}

function next(head, collection) {
    return collection[head.next]
}

function nodeAt(index, list, collection) {
    let node = collection[list]
    for (let i = 0; i < index; i++) {
        node = collection[node.next]
    }
    return node
}



function addressAt(index, list, collection) {
    let node = collection[list]

    if (index > 0) {
        for(let i = 0; i < index; i++){
            node = node.next;
        }
        return node
    } else {
        return list
    }
}

function indexAt(node, collection, list) {


}