<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    render() {
        // if (this.$scopedSlots.default) {
            return this.$scopedSlots.default({
                user: {
                    name: 'hardik'
                }
            });
        // }
    }
}
</script>