<template lang='pug'>
section#medical-list
	ErrorMessage( v-if='noRecords' :message='errorMessage' )
</template>

<script lang='js'>
import ErrorMessage from '@/components/ErrorMessage.vue'

export default {
	name: 'MedicalList',
	components: { ErrorMessage },
	data(){
		return{
			records: [],
			errorMessage: 'There are no Medical Records for this pet.',
			noRecords: true
		}
	}
}
</script>
