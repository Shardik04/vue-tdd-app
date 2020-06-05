<template>
    <div>
        SlotDemo
        <User v-slot="slotProps">
            <div>{{ slotProps }}</div>
            <h6>Hello from Demo SLot components</h6>
            <Hardik/>
        </User>
    </div>
</template>

<script>
export default {
    name: 'SlotDemo',
    components: {
        User: () => import('@/components/User'),
        Hardik: () => import('@/components/Hardik')
    },
}
</script>