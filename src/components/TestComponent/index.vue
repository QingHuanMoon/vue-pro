<template>
    <section>
        <p>Test Component</p>
        <div v-if="ajaxStatus">
            {{photoList.name}}, {{photoList.value}}
        </div>
        {{ HelloWorld }}
        <div class="box"></div>
    </section>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'TestComponent',
        data: () => ({
            photoList: null,
            ajaxStatus: false
        }),
        computed: {
          ...mapState({
              HelloWorld() {return this.$store.state.test.HelloWorld}
          })
        },
        mounted() {
            this.sayHelloWorld()
        },
        methods: {
            sayHelloWorld () {
                this.$store.dispatch('getHelloWorld')
            }
        }
    }
</script>

<style lang="less">
@import "index";
</style>
