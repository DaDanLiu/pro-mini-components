<template>
  <demo-section>
    <demo-block title="基础用法">
      <pro-picker
        :options="[
          { value: 1, label: '选项一' },
          { value: 2, label: '选项二' },
        ]"
      />
    </demo-block>

    <demo-block title="自定义颜色">
      <pro-picker color="#03a9f4" style="margin-left: 15px">按钮</pro-picker>
    </demo-block>
  </demo-section>
</template>
