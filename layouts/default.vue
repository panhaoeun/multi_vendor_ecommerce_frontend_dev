<template>
    <div>
        <p>sadsa</p>
    </div>
</template>
<!-- Script of Javascript -->
<script>
export default {
   app: {
     head(){
        return{
            title: 'sdsad'
        }
     }
   }, 
   computed: {
     routeName() {
        return this.$route?.name?.split('___')[0] || 'error'
      },
   }
};
</script>
<!-- Style Config -->
<style lang="stylus">
  main
    min-height 500px

  .error
    main
      min-height 300px


  @media only screen and (max-width: 768px)
    main
      min-height 400px
</style>
