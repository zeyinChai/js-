const rootList = [
    { id: 1, parent: null, text: '菜单1' },
    { id: 11, parent: 1, text: '菜单1-1' },
    { id: 12, parent: 1, text: '菜单1-2' },
    { id: 2, parent: null, text: '菜单2' },
    { id: 21, parent: 2, text: '菜单2-1' }
]

function getTreeList(rootList, id = null, list = []) {
    for (var item of rootList) {
        if (item.parent == id) {     // 如果成立 说明这个 item 是 这个id 的子项 
            list.push(item)
        }
    }

    for(var i of list) {
        i.children = []
        getTreeList(rootList,i.id,i.children)
    }

    return list
}

const res = getTreeList(rootList)
console.log('res', res);