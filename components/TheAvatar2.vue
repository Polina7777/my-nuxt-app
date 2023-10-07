<template>

<form>
    <!-- Can be multiple files -->
    <input type="file" name="files" />
    <input type="submit" value="Submit" @submit="submit"/>
  </form>
</template>

<!-- 
  <script>
export default{
    data(){
        return{

        }
    },
    methods:{
        async submit(){
            const result =  await fetch('http://localhost:1337/api/upload', {
        method: 'post',
        body: new FormData(e.target)
      });
      console.log(result)
        }
    }
}
  </script> -->

  <script type="text/javascript">
  const form = document.querySelector('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    await fetch('/api/upload', {
      method: 'post',
      body: new FormData(e.target)
    });
  });
</script>