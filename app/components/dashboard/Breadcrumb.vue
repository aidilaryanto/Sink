<script setup>
import { NuxtLink } from '#components'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
const { title } = useAppConfig()
</script>

<template>
  <Breadcrumb class="flex justify-between">
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink
          :as="NuxtLink"
          to="/dashboard"
        >
          {{ $t('dashboard.title') }}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>{{ title }}</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>

    <DashboardLogout />
  </Breadcrumb>
</template>
