import mTableColumn from '~/components/mTable/templates/mTableColumn';
import '../styl/mTable.styl';

export default {
  functional: true,
  components: {
    mTableColumn,
  },
  props: {
    value: [Array, null],
  },
  render(h, { props, children }) {
    const rows = props.value.map((val) => {
      const columns = children.map((oldEl) => {
        return h(oldEl.componentOptions.tag, {
          props: {
            data: val[oldEl.data.attrs.field],
            ...oldEl.data.attr,
          },
        });
      });
      return h('div', {
        class: {
          'm-table-row': true,
        },
      }, columns);
    });
    return h('div', [h('div', {
      class: {
        'm-table-header': true,
      },
    }, children), ...rows]);
  },
};
