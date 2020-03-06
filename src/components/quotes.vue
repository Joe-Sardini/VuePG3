<template>
    <div class="quotes">
        <button @click="deleteMe(index)">
            <slot>
                <span id="quoteText">{{ quote }} </span>
            </slot>
        </button>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    props: {
        quote: String,
        index: Number
    },
    methods: {
        deleteMe(index) {
            eventBus.RemoveQuote(index);
        }
    }
}
</script>

<style scoped>
.quoteText {
    font-family: cursive;
    font-size: large;
}
</style>