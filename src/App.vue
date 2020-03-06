<template>
    <div class="container">
        <div class="header">
            <app-Header></app-Header>
        </div>
        <div class="addQuote">

        </div>
        <div class="displayQuote">

        </div>
        <div class="footer">
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
import header from './components/header.vue';
import footer from './components/footer.vue';

    export default {
        components: {
            appHeader: header,
            appFooter: footer
        }        
    }
</script>

<style scoped>
.header{
    height: 15%;
    position: relative;
}

.addQuote{
    height: 25%;
    position: relative;
}

.displayQuote{
    height: 25%;
    position: relative;
}

.footer{
    position: relative;
    height:15%;
    border-style: solid;
    border-block-color: black;
}
</style>
