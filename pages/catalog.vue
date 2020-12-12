<template lang="pug">
	m-table(v-model="collection")
		m-table-column(field="name")
			template(#label)
				.color(:style="{ color: 'red' }")
					.color__label Имя                
		m-table-column(field="photo", label="Фотогафия")
			template(#default="{ photo }") 
				img(:src="photo", width="100")
		m-table-column(field="dob", label="День рождения")
		m-table-column(field="job", label="Должность")
</template>

<script>
import mTable from '~/components/mTable/molecules/mTable.js';
import mTableColumn from '~/components/mTable/templates/mTableColumn';

export default {
  components: {
    mTable,
    mTableColumn,
  },
  computed: {
    collection() {
      return this.$store.state.catalog.collection;
    },
  },
  mounted() {},
};
</script>
