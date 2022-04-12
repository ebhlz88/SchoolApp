<template>
    <div>
        <FormContainer>
            <form action="#" method="POST" class="ml-auto mr-11">
                <div class="overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                                <label for="first_name" class="block text-sm font-medium text-gray-700">First
                                    name</label>
                                <input type="text" name="first_name" id="first_name" autocomplete="given-name"
                                    class="inputprimary">
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="last_name" class="block text-sm font-medium text-gray-700">Last
                                    name</label>
                                <input type="text" name="last_name" id="last_name" autocomplete="family-name"
                                    class="inputprimary">
                            </div>

                            <div class="col-span-6 sm:col-span-4">
                                <label for="email_address" class="block text-sm font-medium text-gray-700">Email
                                    address</label>
                                <input type="text" name="email_address" id="email_address" autocomplete="email"
                                    class="inputprimary">
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label for="postal_code" class="block text-sm font-medium text-gray-700">Date of
                                    Birth</label>
                                <MyDateInput v-model="date" mask="99-99-9999" />
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="country" class="block text-sm font-medium text-gray-700">Country /
                                    Region</label>
                                <select id="country" name="country" autocomplete="country" class="inputprimary">
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>

                            <div class="col-span-6">
                                <label for="street_address" class="block text-sm font-medium text-gray-700">Street
                                    address</label>
                                <input type="text" name="street_address" id="street_address"
                                    autocomplete="street-address" class="inputprimary">
                            </div>

                            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                                <input type="text" name="city" id="city" class="inputprimary">
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label for="state" class="block text-sm font-medium text-gray-700">State
                                    / Province</label>
                                <input type="text" name="state" id="state" class="inputprimary">
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label for="postal_code" class="block text-sm font-medium text-gray-700">ZIP /
                                    Postal</label>
                                <input type="text" name="postal_code" id="postal_code" autocomplete="postal-code"
                                    class="inputprimary">
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit"
                            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </FormContainer>
    </div>
</template>

<script>
import MyDateInput from '../components/MyDateInput.vue'
import FormContainer from '../components/FormContainer.vue'
export default {
    name: 'Formcontainer',
    data() {
        return {
            date: ''
        }
    },
    components: {
        MyDateInput,
        FormContainer
    }
}
</script>

<style>
</style>