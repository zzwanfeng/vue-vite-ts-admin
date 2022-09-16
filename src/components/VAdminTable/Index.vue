<template>
  <div>
    <!-- 搜索模块 -->
    <slot name="table-searchs"></slot>
    <!-- 相关按钮模块 -->
    <slot name="table-buttons"></slot>
    <!-- 表格模板 -->
    <el-table
      v-loading="VAdminTableProps.isLoading"
      element-loading-text="加载中..."
      :height="VAdminTableProps.tableHeight"
      :style="{ width: tableWidth, marginTop: '15px' }"
      :data="ShowTableContentData"
      :stripe="VAdminTableProps.isStripe"
      :border="VAdminTableProps.isBorder"
      @selection-change="handleSelectionChange"
    >
      <el-table-column v-if="VAdminTableProps.isNeedCheckbox" type="selection" />
      <el-table-column
        v-for="(item, index) in TableHeaderData"
        :key="index"
        :fixed="item.columnFixed"
        :prop="item.columnProp"
        :label="item.columnTitle"
        :width="item.columnWidth"
      >
        <template #default="scope" v-if="item.columnCustom">
          <slot :name="item.columnProp" :content="scope.row"></slot>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页模块 -->
    <el-pagination
      style="margin-top: 20px"
      background
      v-model:currentPage="CurrentPage"
      v-model:page-size="CurrentPageSize"
      layout="->, total, sizes, prev, pager, next, jumper"
      :page-sizes="VAdminTableProps.defaultPageSizes"
      :total="VAdminTableProps.tableContent.length"
      @current-change="changeCurrentPage"
      @size-change="changeCurrentPageSize"
    ></el-pagination>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

interface VAdminTableHeaderData {
  columnTitle: string
  columnProp: string
  columnWidth?: number
  columnCustom?: boolean
  columnFixed?: string
}

interface IVAdminTableProps {
  isStripe?: boolean
  isBorder?: boolean
  isLoading?: boolean
  isNeedCheckbox?: boolean
  tableHeader: VAdminTableHeaderData[]
  tableContent?: unknown[]
  tableWidth?: string
  tableHeight?: string | number | undefined
  sectionContent?: unknown[]
  defaultPage?: number
  defaultPageSize?: number
  defaultPageSizes?: number[]
  handlePagination?: 'web' | 'serve'
}

const VAdminTableProps = withDefaults(defineProps<IVAdminTableProps>(), {
  isStripe: true,
  isBorder: true,
  isLoading: false,
  isNeedCheckbox: false,
  tableWidth: '100%',
  tableHeight: undefined,
  defaultPage: 1,
  defaultPageSize: 10,
  defaultPageSizes: () => [5, 10, 15, 20, 25],
  handlePagination: 'web'
})

interface IVAdminTableEmits {
  (e: 'update:sectionContent', value: unknown[]): void
  (e: 'update:defaultPage', value: number): void
  (e: 'update:defaultPageSize', value: number): void
}

const VAdminTableEmits = defineEmits<IVAdminTableEmits>()

const TableHeaderData = ref(VAdminTableProps.tableHeader || [])
const ShowTableContentData = ref<unknown[]>([])

// 控制表格多选
const handleSelectionChange = (value: unknown[]) => {
  VAdminTableEmits('update:sectionContent', value)
}

// 当前页数
const CurrentPage = ref(VAdminTableProps.defaultPage)
// 显示条数大小
const CurrentPageSize = ref(VAdminTableProps.defaultPageSize)
// 改变页数
const changeCurrentPage = (value: number) => {
  CurrentPage.value = value
  VAdminTableEmits('update:defaultPage', value)
}
// 改变页数大小
const changeCurrentPageSize = (value: any) => {
  CurrentPageSize.value = value
  VAdminTableEmits('update:defaultPageSize', value)
}
// 分页操作
const showTableContent = (page: number, size: number) => {
  const _CloneDeepTableContentData = JSON.parse(JSON.stringify(VAdminTableProps.tableContent || []))
  let ShowArray: unknown[] = []
  if (page === 1) {
    ShowArray = _CloneDeepTableContentData?.slice(0, size)
  } else {
    ShowArray = _CloneDeepTableContentData?.slice((page - 1) * size, page * size)
  }

  return ShowArray
}

watchEffect(() => {
  if (VAdminTableProps.handlePagination === 'web') {
    ShowTableContentData.value = showTableContent(CurrentPage.value, CurrentPageSize.value)
  } else {
    ShowTableContentData.value = VAdminTableProps.tableContent || []
  }
})
</script>

<style scoped></style>
