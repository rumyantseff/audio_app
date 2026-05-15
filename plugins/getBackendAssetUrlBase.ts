export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const backendAssetUrl = config.public.backendAssetUrl as string | undefined

  return {
    provide: {
      assetUrl: (id: string) =>
        backendAssetUrl ? `${backendAssetUrl}/assets/${id}` : id,
    },
  }
})
