import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import BreedForm from '@/components/BreedForm.vue'

/* We import createLocalVue to load Buefy and store */
const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(BreedForm, { store, localVue })

describe('BreedForm Component', () => {
	const data = BreedForm.data()
	it('Set the correct default data', () => {
		expect(typeof BreedForm.data).toBe('function')
		expect(data.title).toMatch('Create Breed')
		expect(data.breedName).toMatch('')
		expect(data.status).toBeNull()
	})

	it('Should have a Success Messages on Create Success Status', async () => {
		wrapper.setData({ status: 201 })
		await wrapper.vm.$nextTick()
		const successMessage = wrapper.get('b-message-stub')
		expect(successMessage.attributes().title).toMatch('Success')
		expect(successMessage.attributes().icon).toMatch('check')
	})

	it('Should have an Error Messages on Create Error Status', async () => {
		wrapper.setData({ status: 401 })
		await wrapper.vm.$nextTick()
		const errorMessage = wrapper.get('b-message-stub')
		expect(errorMessage.attributes().title).toMatch('Error')
		expect(errorMessage.attributes().icon).toMatch('exclamation')
	})

	it('Should has an init method', () => {
		expect(wrapper.vm.init).toBeTruthy()
	})

	it('Should has a close method', () => {
		expect(wrapper.vm.close).toBeTruthy()
	})

	it('Should has a send method', () => {
		expect(wrapper.vm.send).toBeTruthy()
	})

	it('Should has a clearInputs method', () => {
		expect(wrapper.vm.clearInput).toBeTruthy()
	})

	it('Should has a createService method', () => {
		expect(wrapper.vm.createBreed).toBeTruthy()
	})

	it('Should has a setOnSuccess method', () => {
		expect(wrapper.vm.setOnSuccess).toBeTruthy()
	})

	it('Should has a setOnError method', () => {
		expect(wrapper.vm.setOnError).toBeTruthy()
	})
})
