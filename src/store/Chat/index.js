
// 
let state = {
    // 用户自定义的角色
    userDefined: [],
    // 默认的角色
    defaultRole: [],

    // 当前的聊天信息的ID
    isShowID: 'chatGPT3.5',
    i: 0,

    // setData设置的数据
    setData:""
}

const mutations = {
    // 初始化数据
    GETNEWDAtA(Store, value) {
        Store.userDefined = value.userDefined
        Store.defaultRole = value.defaultRole
    },

    // 设置id
    SETISSHOWID(Store, value) {
        Store.isShowID = value
    },
    // 更新 userDefined 数组  用户自定义
    UPDATEUSERDEFINED(state, updatedList) {
        state.userDefined = updatedList;
        localStorage.setItem("userDefined", JSON.stringify(updatedList));
    },

    // 更新 defaultRole 数组 默认角色
    UPDATEDEFAULTROLE(state, updatedList) {
        state.defaultRole = updatedList;
        localStorage.setItem("defaultRole", JSON.stringify(updatedList));
    },

    // 删除一条数据
    REMOVEONE(state, value) {
        console.log(value, 'value');
    },

    // 填充待修改的数据
    SETSETDATA(state, value){
        state.setData = value
    },
}

//  服务员
const actions = {
    // 初始化数据
    getNewData(minisotre) {
        let userDefined = JSON.parse(localStorage.getItem("userDefined"));
        let defaultRole = JSON.parse(localStorage.getItem("defaultRole"));
        // console.log(userDefined,defaultRole);
        minisotre.commit('GETNEWDAtA', { userDefined: userDefined, defaultRole: defaultRole });
    },

    // 设置展示的聊天界面,通过id来锁定
    setIsShowID(minisotre, value) {
        minisotre.commit('SETISSHOWID', value)
    },

    // 删除一条数据
    removeOne(minisotre, value) {
        console.log(minisotre, "这内", value, minisotre.state.i);
        if (value.type == "defaultRole") {
            // find函数返回查询到的,findIndex返回下标
            let i1 = minisotre.state.defaultRole.findIndex(item => item.id == minisotre.state.isShowID);
            if(i1 != -1){
            let i2 = minisotre.state.defaultRole[i1].data.findIndex(item => item.id == value.id)
            if (i2 !== -1) {
                minisotre.state.defaultRole[i1].data.splice(i2, 1);
                minisotre.commit('UPDATEDEFAULTROLE', minisotre.state.defaultRole)
            }
            console.log(i2);
        }
            // 失败的写法
            // minisotre.state.defaultRole = minisotre.state.defaultRole.filter(item => item.id != value.id);
            //     arr = minisotre.state.defaultRole.filter(item => item.id == minisotre.state.isShowID);
            //    arr2 = arr[0].data.filter(item => item.id != value.id)
            //     console.log(arr,arr2);
            //     if(arr.length != arr[0].data.length){

            //     }
            //     minisotre.commit('UPDATEDEFAULTROLE',arr)

        }
        else {
            let i1 = minisotre.state.userDefined.findIndex(item => item.id == minisotre.state.isShowID);
            if(i1 != -1){
            let i2 = minisotre.state.userDefined[i1].data.findIndex(item => item.id == value.id)
            if (i2 !== -1) {
                minisotre.state.userDefined[i1].data.splice(i2, 1);
                minisotre.commit('UPDATEUSERDEFINED', minisotre.state.userDefined)
            }
            console.log(i2);
        }
        }
    },

    // 删除自定义角色
    removeRole(minisotre, item) {
        if (item.id == minisotre.state.isShowID) {
            minisotre.state.isShowID = 'chatGPT3.5'
        }
        let i1 = minisotre.state.userDefined.findIndex(e => e.id == item.id);
        if (i1 !== -1) {
            minisotre.state.userDefined.splice(i1, 1);
            minisotre.commit('UPDATEUSERDEFINED', minisotre.state.userDefined)
        }

    },

    // 填充修改的数据
    setSetdata(minisotre, item){
        minisotre.commit('SETSETDATA',item)
    },

    // 保存修改完的角色信息
    SaveChangesUserRole(minisotre){
        let id = minisotre.state.setData.id 
        // 找
        let i1 = minisotre.state.userDefined.findIndex(item => item.id == id)
        console.log(i1);
        // 替换
        minisotre.state.userDefined[i1] = minisotre.state.setData
        // 保存到浏览器
        minisotre.commit('UPDATEUSERDEFINED', minisotre.state.userDefined)


    }
}







export default {
    state, mutations, actions, 
}