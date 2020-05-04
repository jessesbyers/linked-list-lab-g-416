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
    let currentNode = headNode(list, collection)
    let index
    for (index = 0; currentNode !== node; index++) {
        currentNode = next(currentNode, collection)
    }
    return index
}

// function insertNodeAt(index, value, collection, list) {
//     let currentNode = headNode(list, collection)
//     // for (let i = 0; index > i; i++) {
//     //     currentNode = next(currentNode, collection)
//     // }
//     return currentNode.next
// }

function insertNodeAt(index, address, collection, list) {
    let previousNode = nodeAt(index - 1, list, collection)
    // let previousNodeIdx = indexAt(previousNode, collection, list)
    // let previousNodeAddress = addressAt(previousNode, list, collection)
    let subsequentNodeAddress = addressAt(subsequentNode, list, collection)
    let subsequentNode = nodeAt(index, list, collection)



    previousNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = subsequentNodeAddress


}