export default function () {
  const {
    public: { apiUrl: API_URL }
  } = useRuntimeConfig()

  return API_URL
}
