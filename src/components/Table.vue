<template>
  <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-white border-b">
            <tr class="blueGradient text-white">
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                F,Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="items in data" :key="items.id" class="bg-white border transition duration-300 ease-in-out hover:bg-gray-200 hover:bg-slate-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{items.rollnbr}}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {{items.s_name}}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {{items.s_fname}}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {{items.address}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name:'MyTable',
props:{
  data:Object,

}
}
</script>

<style scoped>

</style>