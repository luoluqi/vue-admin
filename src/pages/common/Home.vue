<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tags></v-tags>
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import vTags from './Tags.vue';

    export default {
        computed: {
            collapse () {
                return this.$store.state.common.collapse
            }
        },
        data(){
            return {
                tagsList: []
            }
        },
        components:{
            vHead, vSidebar, vTags
        },
        created(){
            
        }
    }
</script>
