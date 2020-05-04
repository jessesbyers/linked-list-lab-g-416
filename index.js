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
    // let head = collection[list]
    let node = collection[list]
    for (let i = 0; i < index; i++) {
        // return node
    node = collection[node.next]
    }
    return node
}