<template>
  <section>
    <test-component/>
  </section>
</template>

<script>
// @ is an alias to /src

import TestComponent from '@/components/TestComponent'
export default {
  components: {TestComponent},
  name: 'HomePage',
  data: () => ({})
}
</script>
