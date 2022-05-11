<template>
  <view class="picker-wrapper">
    <picker
      range-key="label"
      :range="options"
      :disabled="selectDisabled"
      :class="[colorDisplay, 'pickerMinWidth']"
      :value="valueIdx"
      :placeholder-style="placeholderStyle"
      @change="pickerChange"
    >
      {{ selectedLabel || placeholder }}
    </picker>
    <u-icon
      v-if="clearDisplay"
      name="close"
      color="#bbb"
      class="clear-btn"
      :size="24"
      @click.stop="clear"
    />
    <i v-else class="icon2018 e912 right-arrow" />
  </view>
</template>

<script>
export default {
  name: 'pro-picker',
  props: {
    value: {
      type: String,
      default: '',
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      // default: [],
    },
  },
  data() {
    return {
      placeholderStyle: 'color:#bbb;font-size:24rpx;line-height:32rpx;',
      selectedLabel: this.placeholder,
      valueIdx: 0,
    };
  },
  computed: {
    selectDisabled() {
      return this.disabled || !this.options || !this.options.length;
    },
    colorDisplay() {
      const className =
        !this.selectedLabel || this.selectedLabel === this.placeholder
          ? 'unSelected'
          : 'selected';

      return className;
    },
    dependencies() {
      return {
        value: this.value,
        options: this.options,
      };
    },
    clearDisplay() {
      if (this.clearable) {
        return (
          !this.disabled &&
          this.selectedLabel !== this.placeholder &&
          this.selectedLabel
        );
      }
      return false;
    },
  },
  watch: {
    dependencies: {
      handler: ({ value }) => {
        if (this.options.length) {
          let selected;
          const idx = this.options.findIndex((v) => {
            return v.value == value;
          });
          if (idx === -1) {
            this.valueIdx = 0;
          } else {
            this.valueIdx = idx;
            selected = this.options[idx];
          }
          this.selectedLabel = selected?.label;
          this.$emit('input', selected?.value);
        } else {
          this.valueIdx = 0;
          this.selectedLabel = this.placeholder;
        }
      },
    },
  },
  methods: {
    clear() {
      if (!this.disabled) {
        console.log('this.placeholder', this.placeholder);
        this.valueIdx = 0;
        this.$emit('input', null);
        this.$nextTick(() => {
          this.selectedLabel = this.placeholder;
        });
      }
    },
    pickerChange(e) {
      const idx = e.target.value;
      const value = this.options[idx]?.value;
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped lang="scss">
.clear-btn {
  padding-left: 8px;
  // padding-right: 5px;
}
.unSelected {
  color: #bbbbbb;
}
.selected {
  color: #666;
}
.pickerMinWidth {
  min-width: 150px;
  text-align: right;
}
.picker-wrapper {
  picker {
    height: 50px;
  }
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .right-arrow {
    font-size: 36rpx;
    color: #bbbbbb;
    line-height: 36rpx;
    margin-left: 10rpx;
  }
}
</style>
