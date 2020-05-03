import router from '@/router'
const tags = {
    namespaced: true,
    state: {
        tagList: sessionStorage.tagList ? JSON.parse(sessionStorage.tagList): [],
        curTag: ''
    },
    getters: {
        
    },
    mutations: { 
        closeTags(state,index) {
            const delItem = state.tagList.splice(index, 1)[0];
            const item = state.tagList[index] ? state.tagList[index] : state.tagList[index - 1];
            if (item) {
                // delItem.path === this.$route.fullPath && this.$router.push(item.path);
                router.push(item.path);
            }else{
                router.push('/');
            }
        },
        closeAll(state){
            state.tagList = [];
            router.push('/');
        },
        closeOther(state){
            const curItem = state.tagList.filter(item => {
                return item.path === state.curTag.fullPath;
            })
            state.tagList = curItem;
        },
        // 设置标签
        setTags(state, route){
            state.curTag = route
            const isExist = state.tagList.some(item => {
                return item.path === route.fullPath;
            })
            if(!isExist){
                if(state.tagList.length >= 8){
                    state.tagList.shift();
                }
                state.tagList.push({
                    title: route.meta.title,
                    path: route.fullPath,
                    name: route.matched[1].components.default.name
                })
            }
           
        },
    },
    actions: {

    }
}
export default tags
